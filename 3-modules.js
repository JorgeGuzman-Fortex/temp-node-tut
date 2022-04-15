// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const jorge = require('./4-names').jorge
const zhax = require('./4-names').zhax
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-grenade')
sayHi('Susan')
sayHi(jorge)
sayHi(zhax)
