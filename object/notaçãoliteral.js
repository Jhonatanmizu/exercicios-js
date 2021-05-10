const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nomeAttr = "nota";
const valorAttr = 71;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
    name:"Crow",
    idade:18,
    imc: function (Altura, peso) {
        return (Altura**2)/peso
        
    },
    funcão2(){
        //....
    }
}
console.log(obj5.imc(1.80,60))
