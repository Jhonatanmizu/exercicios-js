// ES8: Object.values/Object.entries
const obj = {
    nome:'jack',
    idade:10
}
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.keys(obj))
// melhorias notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 19
    }
}
console.log(pessoa.ola());
// Class
class animal {}
class cachorro extends animal{
    fala(){
        return "Au au"
    }
}
console.log(new cachorro().fala())