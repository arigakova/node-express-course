const names = require('./04-names')
const sayHi = require('./05-utils')
const moreNames = require('./06-alternative-flavor')
require('./07-mind-grenade')
console.log(names)
sayHi(names.john);
console.log(`name1: ${moreNames.otherNames.name1}`)
console.log(`name2: ${moreNames.otherNames.name2}`)
