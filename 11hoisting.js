//hoisting in js

 //code run -> execution context creation phase
 //1 memory allocation phase
 //2 code execution phase

 //1 memory allocation phase
 //here js engine allocates memory for variables and functions
 //variables declared with var are initialized with undefined
 //functions are hoisted with their entire body

 //2 code execution phase
 //here js engine executes the code line by line
 //here variables are assigned their values and functions are executed when called

 //function also have their own execution context.
 //when a function is called, a new execution context is created for that function

//global execution context is created when the code starts executing
//when a function is called, a new execution context is created for that function
//after the function execution is completed, the function execution context is destroyed and control is returned to the global execution context

console.log(a); //output: undefined due to hoisting
var a = 10;
var b = 20;
var result = sum(a, b); //function is hoisted, so we can call it before its declaration
console.log(result); //output: 30
 function sum(num1, num2){
    var sum = num1 + num2;
    return sum;
 }
 var result2 = sum(5, 15);
 console.log(result,result2); //output: 30 20

 //memory allocation phase
    //a -> undefined
    //b -> undefined
    //sum -> fncode
    //result -> undefined
    //result2 -> undefined

//code execution phase
    //console.log(a); -> undefined
    //a = 10;
    //b = 20;
    //result = sum(a, b); -> result = 30
    //result2 = sum(5, 15); -> result2 = 20
    //console.log(result, result2); -> 30 20


    //let and const are also hoisted but not initialized
    //they are in temporal dead zone from the start of the block until the declaration is processed
    //accessing them before declaration will throw a ReferenceError

    //console.log(x); //ReferenceError: Cannot access 'x' before initialization(Temporal Dead Zone)
    //console.log(y); //ReferenceError: Cannot access 'y' before initialization(Temporal Dead Zone)
    let x = 5;
    const y = 10;
    console.log(x, y); //output: 5 10


    //function 
    let p = 10;
    const q = 20;
    console.log(result3); //ReferenceError: Cannot access 'result3' before initialization(Temporal Dead Zone)   
    const add = function(num1, num2){//im memory allocation phase of const type function, add is initialized with temporal dead zone and in execution phase, it is assigned with the function code.
        const  summation = num1 + num2;
        return summation;
    }
    const result3 = add(p, q);
    console.log(result3); //output: 30

    //same thing with arrow function
    let x1 = 15;
    const y1 = 25;
    console.log(result4); //ReferenceError: Cannot access 'result4' before initialization(Temporal Dead Zone)
    const addArrow = (num1, num2) => {
        const summation = num1 + num2;
        return summation;
    }
    const result4 = addArrow(x1, y1);
    console.log(result4); //output: 40
