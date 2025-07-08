const Person = {
    fname: "John",
    lname: "Doe",
    age: 23,
    fullname: function() {
        console.log(this.fname + " " + this.lname);
    }
}

console.log(Person.fullname());
