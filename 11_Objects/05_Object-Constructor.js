// const Person = {
//     fname: "John",
//     lname: "Doe",
//     age: 23
// }

// console.log(Person.age) 


function Person(name, age, eyeColor) {
    this.name = name
    this.age = age
    this.eyeColor = eyeColor
} 

const father = new Person("John", 45, "Blue")
const mother = new Person("Alice", 38, "Brown") 

// father.eyeColor = "blue"
// mother.eyeColor = "brown"

Person.prototype.eyeColor = "Blue";

// console.log(Person());


console.log(father);
console.log(mother);
