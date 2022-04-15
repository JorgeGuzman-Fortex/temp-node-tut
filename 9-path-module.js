const path = require('path')

// Get the char used by the OS to structure a path
console.log(path.sep)

// Get the path of a specified file or folder
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// Get the specific file or folder from the specified path
const base = path.basename(filePath)
console.log(base)

// Get the absolute path to a file or folder
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)