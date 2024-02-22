const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Array of source directories
const sourceDirs = [
    './src/assets/collage/posters/',
    './src/assets/collage/layer2/',
];

sourceDirs.forEach((sourceDir) => {
  const targetDir = path.join(sourceDir, 'pixelated');

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

      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        try {
            execSync(`convert "${sourcePath}" -scale 10% "${targetPath}"`);
            console.log(`Pixelated ${file}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
        }
      }
    });
  });
});

