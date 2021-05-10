const quaseArray = {0: "TAN",  1:"K"}
console.log(quaseArray)
Object.defineProperty(quaseArray, "toString",{
        value: function(){ return Object.values(this)},
        enumerable:false
})
console.log(quaseArray[0])
const array = ["Ricarda","Renata","Jaqueline"]
console.log(quaseArray.toString(),  array)