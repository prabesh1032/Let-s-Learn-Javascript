//function
//normal function declaration
function greeting(){
    console.log("Hello, welcome to JavaScript functions!");
}
greeting(); //calling the function

//function with parameters
function add(a, b){
    return a + b;
}
let total = add(5, 10);
console.log(`Sum is: ${total}`);
console.log(add(20, 30)); //directly calling the function inside console.log
console.log(add(7,6,3)); //output: 13 //calling function with three arguments, but function only takes two, so third is ignored
 //rest operator
function sum(...args){
    let total = 0;
    for(let num of args){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5)); //output: 15
console.log(sum(10,20)); //output: 30
//rest operator allows function to accept variable number of arguments as an array.
//spread operator is also same as rest operator but it is used to expand an array into individual elements.
let numbers = [1,2,3,4,5];
console.log(sum(...numbers)); //output: 15
//here we are using spread operator to expand the array into individual elements and pass them to the function.

//noromal function
function multiplynormol(a, b){
    return a * b;
}
console.log(multiplynormol(3, 4)); //12
//function expression
const multiplyEx = function(a, b){
    return a * b;
}
console.log(multiplyEx(5, 4)); //20

//arrow function
//arrow function is a shorter syntax for writing functions.
const addnum = (x, y) => {//if there is curly braces, we need to use return statement
return x + y;
}
console.log(addnum(10, 15)); //25

const multiplyArrow = (a, b) => a * b;//we can remove the curly braces and return statement for single expression
console.log(multiplyArrow(6, 7)); //42
const square = x => x * x; //if there is only one parameter, we can remove the parentheses as well
console.log(square(5)); //25

const greetings =() => ({//if we want to return an object, we need to wrap it by small brackets. small brackets tells js that it is an expression, not a function body. and we are returning an object.
    name: "Prabesh",
    age: 22} )
console.log(greetings());//output: { name: 'Prabesh', age: 22 }

//IIfe finction(immediately invoked function expression)
(function(){
    console.log("This is an IIFE function");
})();
//IIFE function is a function that is executed immediately after it is defined.
(()=>{
    console.log("This is an arrow IIFE function");
})();

//callback function
//callback function is a function that is passed as an argument to another function and is executed inside that function.
function greet(){
    console.log("Hello jii kya hall heh");
}
function meet(callback){
    console.log("Meeting started");
    callback();
    console.log("Meeting ended");
}
meet(greet);
//here, greet is a callback function that is passed to meet function and is executed inside meet function.
// confusing:we can do same thing using anonymous function as well
function greets(){
    console.log("Hello jii kya hall heh");
}
function meets(){
    console.log("Meeting started");
    greets();
    console.log("Meeting ended");
}
meets();
//but the difference is that in first case, we can pass different functions as callback to meet function and it will execute that function. but in second case, we are calling greets function directly inside meets function, so we cannot change the function that is called inside meets function.