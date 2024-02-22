const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
console.log(ffmpeg.path); 

// Array of source directories
const sourceDirs = [
    './src/assets/collage/posters/',
    './src/assets/collage/layer2/',
    './src/assets/collage/videos/',
];

sourceDirs.forEach((sourceDir) => {
  const targetDir = path.join(sourceDir, 'compressed');

  if (!fs.existsSync(targetDir)) {
    console.log(`Creating new directory ${targetDir}`);
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.readdir(sourceDir, (err, files) => {

    if (err) {
      console.error(`Error reading directory ${sourceDir}:`, err);
      return;
    }

    files.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      console.log(`Processing file ${sourcePath}`);

            // For images: pixelation logic remains
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        try {
          execSync(`convert "${sourcePath}" -scale 3% "${targetPath}"`);
          console.log(`Pixelated ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }

      // For GIFs: compress using gifsicle
      else if (/\.gif$/i.test(file)) {
        try {
          import('gifsicle').then(gifsicle => {
          execSync(`gifsicle --scale=0.05 -o "${targetPath}" "${sourcePath}"`);
});
          console.log(`Compressed ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }

      // For MP4s: compress using ffmpeg
      else if (/\.mp4$/i.test(file)) {
        try {
          execSync(`ffmpeg -y -i "${sourcePath}" -an -vcodec libx264 -crf 28 -vf "scale='iw/10:ih/10:flags=lanczos:force_original_aspect_ratio=decrease',pad='width=ceil(iw/10)*10:height=ceil(ih/10)*10'" "${targetPath}" -loglevel error`);
          console.log(`Compressed ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    });
  });
});

