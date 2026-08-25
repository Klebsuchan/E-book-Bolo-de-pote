const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const regexMap = [
  [/text-gray-900 dark:text-gray-700 dark:text-white\/80/g, 'text-gray-700 dark:text-white/80'],
  [/text-gray-900 dark:text-gray-600 dark:text-white\/60/g, 'text-gray-600 dark:text-white/60'],
  [/text-gray-900 dark:text-gray-500 dark:text-white\/50/g, 'text-gray-500 dark:text-white/50'],
  [/text-gray-900 dark:text-gray-400 dark:text-white\/40/g, 'text-gray-400 dark:text-white/40'],
  [/text-gray-900 dark:text-gray-400 dark:text-white\/30/g, 'text-gray-400 dark:text-white/30'],
  [/text-gray-900 dark:text-gray-300 dark:text-white\/20/g, 'text-gray-300 dark:text-white/20'],
  [/\btext-gray-900 dark:text-white\b/g, 'text-gray-900 dark:text-white']
];

for (const [regex, replacement] of regexMap) {
  content = content.replace(regex, replacement);
}

fs.writeFileSync('src/App.tsx', content);
