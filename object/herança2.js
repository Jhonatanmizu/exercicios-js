//cadeia de prototipo (prototype chain)
const avo = { Attr: "A"}
const pai = {__proto__: avo, Attr2: "B"}
const filho = { __proto__: pai, Attr3: "C"}
console.log(filho.Attr)

const carro = {
    velatual: 0,
    velmax: 200,
    acelerar(delta){
        if (this.velatual + delta <= this.velmax) {
            this.velatual += delta
            
        }else{
            this.velatual = this.velmax
        }
    },
    status(){
            return `${this.velatual}km/hr de ${this.velmax}km/hr`
    }
}

const ferrari = {
    modelo:"F50",
    velmax:325, //shawdoing

}
const volvo = {
    modelo:"v10",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())