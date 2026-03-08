const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '.next', 'build-manifest.json');
if (!fs.existsSync(manifestPath)) {
    console.error('Manifest not found at ' + manifestPath);
    process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const files = new Set();

// Add polyfills
if (manifest.polyfillFiles) manifest.polyfillFiles.forEach(f => files.add(f));

// Add root main files (Next.js 13+ App Router standard)
if (manifest.rootMainFiles) manifest.rootMainFiles.forEach(f => files.add(f));

// Add files for the homepage
if (manifest.pages && manifest.pages['/']) {
    manifest.pages['/'].forEach(f => files.add(f));
}

let totalSize = 0;
console.log('--- Bundle Breakdown for Page: / ---');
files.forEach(f => {
    const filePath = path.join(__dirname, '.next', f);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        console.log(`${f}: ${(stats.size / 1024).toFixed(2)} KB`);
    } else {
        console.warn(`${f}: NOT FOUND`);
    }
});

console.log('------------------------');
console.log(`Total First Load JS (Uncompressed): ${(totalSize / 1024).toFixed(2)} KB`);
console.log(`Estimated Gzip (approx 28%): ~${((totalSize * 0.28) / 1024).toFixed(2)} KB`);
