// 2. Demonstrate “path” core module in NodeJS.

const path = require('path');

console.log(path.dirname('D:\\dotnet\\Models'));
console.log(path.join('D:\\dotnet\\Models', 'D:\\dotnet\\Models'));
console.log(path.basename('D:\\dotnet\\Models'));
console.log(path.isAbsolute('D:\\dotnet\\Models'));
console.log(path.normalize('D:\\dotnet\\Models'));
console.log(path.resolve('D:\\dotnet\\Models', 'D:\\dotnet\\Models'));
console.log(path.extname('D:\\dotnet\\Models'));
console.log(path.relative('D:\\dotnet\\Models', 'D:\\dotnet\\Models'));