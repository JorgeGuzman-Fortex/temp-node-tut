const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')

// Default 64Kb
// Last Buffer - Remainder
// highWaterMark - Control Size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8 })

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))