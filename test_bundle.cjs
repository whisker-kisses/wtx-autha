const fs = require('fs');
const code = fs.readFileSync('c:/Users/Lord Commender/Desktop/Client-Automation/auth/Tenzo-X-Auth/dist/assets/index-N2JGm5Cr.js', 'utf8');

// Check dynamic imports or import statements
const staticImports = code.match(/import\s*.*?from\s*['"].*?['"]/g) || [];
console.log('Static imports:', staticImports);

const dynamicImports = code.match(/import\s*\(.*?\)/g) || [];
console.log('Dynamic imports count:', dynamicImports.length);
console.log('Dynamic imports:', dynamicImports.slice(0, 5));
