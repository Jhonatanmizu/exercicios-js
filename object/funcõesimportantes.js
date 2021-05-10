const pessoa = {
    nome:"Edward",
    idade:19,
    peso:58,
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
Object.defineProperty(pessoa, "datanascimento",{
    enumerable:true,
    writable:false,
    value: "01/12/2000",
})
 pessoa.datanascimento = "21/12/2024"
 console.log(pessoa)
 console.log(Object.keys(pessoa))

 //Object.assign (ECMASCRIPT 2015)
 const test = {a : 1}
 const o2 = {b : 3 }
 const o3 = {c : 2, b : 4, a : 7}
const obj = Object.assign(test, o2, o3)
console.log(obj)
Object.freeze(obj)
obj.c = 1234
