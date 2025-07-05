// 1)
function greet() {
    console.log("Hello World !!!");
}

greet();


// 2)
function addition(a, b) {
    sum = a + b;
    console.log(sum);
}

addition(10, 20) 


// 3)
const mul = function(a, b) {
    result = a * b;
    console.log(result);
    
}

mul(12, 2) 


// 4) Arrow Function
const greeting = () => {
    console.log(`Hello, I am learning about JAVASCRIPT`);
}

greeting()


// 5) IIFE - Immediately Invoked Function Expression
const info = (function(name, age) {
    console.log(`My name is ${name} & I am ${age} years old.`);
})("John", 23) 