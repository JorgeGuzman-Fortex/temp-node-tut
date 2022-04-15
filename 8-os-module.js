const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// System uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`)

// Operative System Info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)