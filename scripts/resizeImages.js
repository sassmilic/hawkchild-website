const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const imagesDirectory = './src/assets/media'; // Directory containing images
const outputDirectory = './public/media'; // Directory to output resized images

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory, { recursive: true });
}

const sizes = [
  { width: 480, suffix: 'xsmall' },
  { width: 768, suffix: 'small' },
  { width: 1024, suffix: 'medium' },
  { width: 1200, suffix: 'large' }
];

fs.readdirSync(imagesDirectory).forEach(file => {
  const filePath = path.join(imagesDirectory, file);
  const extension = path.extname(file);
  const filenameWithoutExt = path.basename(file, extension);

// Copy original file if it doesn't already exist
  const originalDest = path.join(outputDirectory, `${filenameWithoutExt}${extension}`);
  if (!fs.existsSync(originalDest)) {
    fs.copyFileSync(filePath, originalDest);
    console.log(`Copied original: ${file}`);
  }

  // Resize and rename images if they don't already exist
  sizes.forEach(size => {
    const outputFilePath = path.join(outputDirectory, `${filenameWithoutExt}_${size.suffix}${extension}`);
    if (!fs.existsSync(outputFilePath)) {
      const command = `convert "${filePath}" -resize ${size.width}x ${outputFilePath}`;
      execSync(command);
      console.log(`Resized ${file} to ${size.width}px as ${filenameWithoutExt}_${size.suffix}${extension}`);
    } else {
      console.log(`Skipped resizing ${file} to ${size.width}px as ${filenameWithoutExt}_${size.suffix}${extension} (already exists)`);
    }
  });
});
