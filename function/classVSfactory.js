class Person{
  constructor(name){
    this.name = name
  }
  talk(){
    console.log(`My name is ${this.name}`);
  }
}
const p1 = new Person('jordan')
p1.talk()

const Person2 = name => {
return {
  talk: () =>{
    console.log(name);
  }
};
}
const person2 = Person2("Kira")
person2.talk()
