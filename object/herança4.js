function myobject(){
}
console.log(myobject.prototype)

const obj1 = new myobject
const obj2 = new myobject
console.log(obj1.__proto__ === obj2.__proto__)
console.log(myobject.prototype ===  obj1.__proto__)
myobject.prototype.nome = "Jack"
myobject.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}
obj1.falar()

obj2.nome = "Jay"
obj2.falar()

const obj3 = {
}
obj3.__proto__ = myobject.prototype
obj3.nome = "Obj3"
obj3.falar()
//resumindo
console.log((new myobject).__proto__ === myobject.prototype)
console.log(myobject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)