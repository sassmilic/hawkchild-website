const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const imagesDirectory = './src/assets/media'; // Directory containing images
const logosDirectory = './src/assets/artist-logos';
const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
const outputDirectory = './public/media'; // Directory to output resized images

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}

const sizes = [
  { width: 480 / 2, suffix: 'xsmall' },
  { width: 768 / 2, suffix: 'small' },
  { width: 1024 / 2, suffix: 'medium' },
  { width: 1200 / 2, suffix: 'large' }
];

console.log('Resizing logos');
const files = fs.readdirSync(logosDirectory);
for (const file of files) {
    console.log(file);
    const filePath = path.join(logosDirectory, file);
    const extension = path.extname(file);
    if (validExtensions.includes(extension)) {
        const filenameWithoutExt = path.basename(file, extension);
        const outputFilePath = path.join(logosDirectory, `${filenameWithoutExt}.webp`);

        if (!fs.existsSync(outputFilePath)) {
            const resizeCommand = `convert "${filePath}" -resize x100 "${outputFilePath}"`;
            execSync(resizeCommand);
            console.log(`Resized ${file} to a height of 100 pixels and saved as WebP.`);
        } else {
            console.log(`Skipped resizing ${file}, output file already exists.`);
        }
    }
}

fs.readdirSync(imagesDirectory).forEach(file => {
  const filePath = path.join(imagesDirectory, file);
  const extension = path.extname(file);
  const filenameWithoutExt = path.basename(file, extension);

  // Determine new file path for WebP conversion
  const webpFilePath = path.join(outputDirectory, `${filenameWithoutExt}.webp`);

  if (extension === '.gif') {
    if (!fs.existsSync(webpFilePath)) {
        const dimensions = execSync(`identify -format "%wx%h" "${filePath}"`).toString().trim();
        const [width, height] = dimensions.split('x').map(Number);
        // Only resize if the GIF is larger than 1024 in either dimension
        if (width > 1024 || height > 1024) {
            const tempResizedPath = path.join(outputDirectory, `${filenameWithoutExt}_temp_resized.gif`);
            const resizeDimension = width > height ? '1024x' : 'x1024';
            const resizeCommand = `convert "${filePath}" -resize ${resizeDimension} "${tempResizedPath}"`;
            execSync(resizeCommand);
            console.log(`Resized ${file} temporarily to 1024x1024 pixels`);
            // Convert the resized GIF to WebP
            const convertToWebpCommand = `convert "${tempResizedPath}" -quality 50 "${webpFilePath}"`;
            execSync(convertToWebpCommand);
            console.log(`Converted resized ${file} to WebP`);
            // Remove the temporary resized GIF file
            fs.unlinkSync(tempResizedPath);
        }
    } else {
        console.log(`Skipped conversion, ${filenameWithoutExt}.webp already exists.`);
    }
  } else {
      const convertCommand = `convert ${filePath} -quality 50 ${webpFilePath}`;
      execSync(convertCommand);
      console.log(`Converted ${filePath} to WebP`);
  }

  // Resize and rename images if they don't already exist
  sizes.forEach(size => {
    const outputFilePath = path.join(outputDirectory, `${filenameWithoutExt}_${size.suffix}.webp`); // Output as WebP
    if (!fs.existsSync(outputFilePath)) {
      try {
        const resizeCommand = `convert "${webpFilePath}" -quality 50 -resize ${size.width}x "${outputFilePath}"`;
        execSync(resizeCommand);
        console.log(`Resized ${file} to ${size.width}px as ${filenameWithoutExt}_${size.suffix}.webp`);
      } catch (error) {
        console.error('Failed to resize image:', filePath, error);
      }
    } else {
      console.log(`Skipped resizing ${file} to ${size.width}px as ${filenameWithoutExt}_${size.suffix}.webp (already exists)`);
    }
  });
});

