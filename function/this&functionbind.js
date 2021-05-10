const person = {
	name: "Adrian Gecko",
	age: 23,
	height: 70 + "kg",
	haircolor: "blue",
	speak(){
		console.log(this.haircolor)
	}
}
person.speak()
const variable = person.speak
variable()///conflito entre paradigma funcional e OO
const person_talk = person.speak.bind(person)//amarar um O a
person_talk()