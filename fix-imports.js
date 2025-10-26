const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all TypeScript files in the UI components directory
const files = glob.sync('src/components/ui/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace versioned imports with non-versioned ones
  content = content.replace(/@[\d.]+"/g, '"');
  
  fs.writeFileSync(file, content);
});