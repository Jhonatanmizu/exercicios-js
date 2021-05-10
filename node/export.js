console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 20
exports.b =2
module.exports.c = 3
console.log(this.a, this.b, this.c)
exports = null
console.log(module.exports)
