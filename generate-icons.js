// generate-icons.js - Node.js script untuk generate icons
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceIcon = 'original-icon.png'; // Ganti dengan logo IRMAL

async function generateIcons() {
    try {
        // Buat folder icons jika belum ada
        await fs.mkdir('icons', { recursive: true });
        
        for (const size of sizes) {
            await sharp(sourceIcon)
                .resize(size, size)
                .png()
                .toFile(`icons/icon-${size}x${size}.png`);
            
            console.log(`✓ Generated icon-${size}x${size}.png`);
        }
        
        console.log('✅ All icons generated successfully!');
    } catch (error) {
        console.error('❌ Error generating icons:', error);
    }
}

generateIcons();