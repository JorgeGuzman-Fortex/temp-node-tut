const { readFileSync, writeFileSync } = require('fs')
console.log('Start')

// Read contents of a File
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// Create or update the content of a file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`/*, { flag: 'a'}*/)

console.log('Done with this task')
console.log('Starting next task')