Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for (let index = 0; index < this.length; index++) {
        acumulador = callback(acumulador, this[index], index, this)

    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [10,13,20,4,7,8,9,70,]
console.log(nums.reduce2(soma))