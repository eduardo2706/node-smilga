// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative')



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data);

require('./7-min-grenade')