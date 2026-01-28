//this call apply bind keyword in javascript
//strict mode vs non strict mode
//diff between strict mode and non strict mode 
//see the difference in variable declaration and function parameter names
//non strict mode

// var a = 10; //global variable
// b = 20; //global variable without var, let or const
// console.log(a,b); //10 20
// function greet(name,name) {
//     console.log( name,name);
// }
// greet("Prabesh","Sita"); //Sita Sita
//in non strict mode, if we pass same parameter name, the last one will be considered
//strict mode
//'use strict';
//var a = 10; //global variable
// //b = 20;
// //console.log(a,b); //now it will throw an error because b is not defined
// let b = 20; //defining b with let
// console.log(a,b); //10 20
// function greetStrict(name,name) {
//     console.log( name,name);
// }
// greetStrict("Prabesh","Sita"); //now it will throw an error because of duplicate parameter names
// //in strict mode, if we pass same parameter name, it will throw an error

//console.log(window); //in browser, it will log the window object but in nodejs it will be an empty object
//console.log(global); //in nodejs, it will log the global object
//in window it is called window object and in nodejs it is called global object
//console.log(globalThis); //globalThis is same in both browser and nodejs
//console.log(this); //in nodejs, it will log an empty object and in browser it will log the window object
//'use strict'; //enabling strict mode
//console.log(this); //in strict mode, it will log undefined in both browser and nodejs

// //const user = {
//     name: "Prabesh",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//     }
// };
// user.greet(); //Hello, my name is Prabesh and I am 30 years old.
// //here it see which object is calling functiuon, and this will point to that object

// const anotherUser = {
//     name: "Sita",
//     age: 25
// };
//anotherUser.greet = user.greet; //method borrowing
//anotherUser.greet(); //Hello, my name is Sita and I am 25 years old.
//here greet function is called by anotherUser object, so this will point to anotherUser object

'use strict'; //enabling strict mode
function showThis() {
    console.log(this.name);
}
function incrementAge() {
    this.age++;
}
const user1 = {
    name: "Prabesh",
    age: 30,
}
const user2 = {
    name: "Sita",
    age: 25,
}
console.log(this); //undefined in strict mode
showThis.call(user1); //Prabesh, here this will point to user1 object
showThis.call(user2); //Sita, here this will point to user2 object
incrementAge.call(user1);//user1.age = 31
console.log(user1.age);