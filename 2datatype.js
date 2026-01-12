//datatypes in js
//we dont need to declare datatype of variable explicitly in js

//primitive data types(number,string,boolean,null,undefined,symbol,bigint)
//number
let num1 = 42;
let num2 = 3.14;
console.log(`Number 1: ${num1}, Number 2: ${num2}`);


//string
let greeting = "Hello, JavaScript!";
console.log(greeting);


//boolean
let isJavaScriptFun = true;
console.log(`Is JavaScript fun? ${isJavaScriptFun}`);


//bigint
let bigIntNum = 9007199254741923456791n;
console.log(`BigInt Number: ${bigIntNum}`);


//symbol
const sym1 = Symbol('uniqueid');
const sym2 = Symbol('uniqueid');
console.log(`Are sym1 and sym2 equal? ${sym1 === sym2}`); //false
//symbols are unique and immutable identifiers


//undifined
let undf;
//const undf2//const cannot be undefined without initialization
console.log(`Undefined variable: ${undf}`);


//null
let emptyValue = null;
//console.log(typeof emptyValue); //object bug in js
console.log(`Null variable: ${emptyValue}`);
//difference between null and undefined
//undefined means a variable has been declared but not assigned a value
//null is an assignment value that represents no value



//non-primitive data types(arrays,object,function)
//array
let arr = [1, 2, 3,'four', 'five', true];
console.log(`Array: ${arr}`);
console.log(typeof arr);//object


//object
let person = {
    name: 'Prabesh',
    age: 22,
    phone: '123-456-7890',
    isStudent: true
};
console.log(person);
console.log(typeof person);
console.log(`Person Object: Name - ${person.name}, Age - ${person.age}, Phone - ${person.phone}, Is Student - ${person.isStudent}`);
//objects can hold multiple data types and are key-value pairs


//function
let add = function add(a, b) {
    return a + b;
}
console.log(add);
console.log(typeof add);
console.log(`Sum of 5 and 10 is: ${add(5, 10)}`);
//functions are reusable blocks of code that perform a specific task
//functions can also be used as variables and passed as arguments to other functions


//primitive data types are immutable(we cannot change their value directly)
let str1 = "Hello";
str1[0] = "h";
console.log(str1); //still "Hello"

//non-primitive data types are mutable(we can change their value directly)
let arr1 = [1, 2, 3];
arr1[0] = 10;
console.log(arr1); //[10, 2, 3]

obj1={
    name: 'John',
    age: 30
}
let obj2 = obj1; //both obj1 and obj2 point to the same object in memory
obj2.age = 31;
console.log(obj1.age); //31