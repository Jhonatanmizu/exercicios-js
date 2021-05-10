function Person(talk) {
  this.talk = talk

  this.say = function() {
    console.log(`I say i'm ready ${this.talk}`);

  }
}
  const p = new Person("world")
  p.say()
