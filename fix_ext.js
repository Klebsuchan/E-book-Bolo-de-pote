const fs = require('fs');
const dirs = ['public', 'src/assets/images'];
const map = {};

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.startsWith('regenerated_image_'));
  files.forEach(f => {
    const path = dir + '/' + f;
    const b = Buffer.alloc(4);
    const fd = fs.openSync(path, 'r');
    fs.readSync(fd, b, 0, 4, 0);
    fs.closeSync(fd);
    
    const hex = b.toString('hex');
    let ext = '.png';
    if (hex.startsWith('ffd8')) ext = '.jpg';
    else if (hex === '52494646') ext = '.webp'; // RIFF
    else if (hex === '89504e47') ext = '.png'; // PNG
    else ext = '.jpg'; // Fallback
    
    const baseName = f.replace(/\.(png|webp|jpg|jpeg)$/, '');
    const newName = baseName + ext;
    if (f !== newName) {
      fs.renameSync(path, dir + '/' + newName);
      console.log(`Renamed ${dir}/${f} to ${newName}`);
    }
    
    // Create replacements for App.tsx
    map[baseName + '.webp'] = newName;
  });
});

let appContent = fs.readFileSync('src/App.tsx', 'utf-8');
for (const [oldName, newName] of Object.entries(map)) {
  appContent = appContent.replaceAll(oldName, newName);
}
fs.writeFileSync('src/App.tsx', appContent);

let cakeContent = fs.readFileSync('src/components/InteractiveCakeImage.tsx', 'utf-8');
for (const [oldName, newName] of Object.entries(map)) {
  cakeContent = cakeContent.replaceAll(oldName, newName);
}
fs.writeFileSync('src/components/InteractiveCakeImage.tsx', cakeContent);

console.log('Extensions fixed!');
