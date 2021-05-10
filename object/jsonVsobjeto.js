const a = { name:"jack", age: 16, weight:190, heigh:1.80, function(){
    return "no money"
}}
console.log(JSON.stringify(a))
console.log(a)
//console.log(JSON.parse("{a:1, b:2 , c: 10}"))
//console.log(JSON.parse("{'a':19}"))
console.log(JSON.parse('{"a":1, "b":20}'))