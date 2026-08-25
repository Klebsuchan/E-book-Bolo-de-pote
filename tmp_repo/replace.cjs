const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  [/bg-\[#050505\]/g, 'bg-white dark:bg-[#050505]'],
  [/bg-\[#0a0a0a\]/g, 'bg-gray-50 dark:bg-[#0a0a0a]'],
  [/\btext-white\b/g, 'text-gray-900 dark:text-white'],
  [/\bborder-white\/5\b/g, 'border-gray-200 dark:border-white/5'],
  [/\bborder-white\/10\b/g, 'border-gray-200 dark:border-white/10'],
  [/\bborder-white\/20\b/g, 'border-gray-300 dark:border-white/20'],
  [/\bborder-white\/30\b/g, 'border-gray-300 dark:border-white/30'],
  [/\btext-white\/80\b/g, 'text-gray-700 dark:text-white/80'],
  [/\btext-white\/60\b/g, 'text-gray-600 dark:text-white/60'],
  [/\btext-white\/50\b/g, 'text-gray-500 dark:text-white/50'],
  [/\btext-white\/40\b/g, 'text-gray-400 dark:text-white/40'],
  [/\btext-white\/30\b/g, 'text-gray-400 dark:text-white/30'],
  [/\btext-white\/20\b/g, 'text-gray-300 dark:text-white/20'],
  [/\bbg-white\/5\b/g, 'bg-gray-100 dark:bg-white/5'],
  [/\bbg-black\b/g, 'bg-white dark:bg-black'],
  [/border-\[#050505\]/g, 'border-gray-100 dark:border-[#050505]']
];

for (const [regex, replacement] of replacements) {
  content = content.replace(regex, replacement);
}

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements applied successfully');
