const { join } = require('path');
const { execSync } = require('child_process');
const fs = require('fs-extra');

const publishDir = join(__dirname, 'docs');
const buildDir = join(__dirname, 'build');

console.log(`Publishing to ${publishDir}`);

console.log('Removing previous publish');

if (fs.existsSync(publishDir)) {
  fs.rmSync(publishDir, { recursive: true, force: true });
}

console.log('Removing previous build');

if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}

console.log('Building website');

execSync('npm run build');

console.log('Copying build output to publish destination');

fs.copySync(buildDir, publishDir, { overwrite: true, recursive: true });
