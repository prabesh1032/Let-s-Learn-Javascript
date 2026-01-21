//closure in js

//scope
//there are two types of scope in js
//1. global scope
//2. function scope
//3. block scope
//a variable declared outside any function or block is in global scope
//a variable declared inside a function is in function scope
//a variable declared inside a block with let or const is in block scope

let a = 20; //global scope
const b = 30; //global scope
console.log(a, b);

function outerFunction() {
    let c = 40; //function scope
    let d = 50; //function scope
    var g = 100; //function scope
    console.log(a, b, c, d); //output: 20 30 40 50 //accessing variables
}
//console.log(c, d); //ReferenceError: c is not defined.
//console.log(g); //ReferenceError: g is not defined.
if (true) {
    let e = 60; //block scope
    const f = 70;
    var h = 90; //function scope because it isd declared with var
    console.log(a, b, e, f); //output: 20 30 60 70
    console.log(h); //90
}
//console.log(e, f); //ReferenceError: e is not defined.
console.log(h); //output: 90 //var is function scoped, not block scoped.
outerFunction();
//hence we can access global variables inside functions and blocks
//but we cannot access local variables outside their scope
//also if there var in block scope, it will be accessible outside the block as well

let global = 40;

function outer() {
    let global = 50; //local variable
    console.log(global); //output: 
    //first it will look for local variable with name global
    //if not found, it will look for global variable with name global
}
outer();
console.log(global); //output: 40
//hence we can give same name to global and local variables, but different values occurs based on scope


//closure
function createCounter() {
    let count = 0; //local variable
    function increment() {
        count++;
        console.log(count);
        return count;       
    }
    return increment; //returning the inner function
}
const counter = createCounter(); //counter is now the increment function with closure
counter(); //output: 1
counter(); //output: 2
counter(); //output: 3
//hence the inner function increment has access to the outer function createCounter's variable count even after createCounter has finished executing
//this is called closure.
//closure remembers the environment in which it was created
//it allows the inner function to remember the environment in which it was created

//private variables using closure

function bankAccount(initialBalance) {
    let balance = initialBalance; //private variable
    function deposit(amount) {
        balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        return balance;
    }
    function withdraw(amount) {
        if (amount <= balance && amount>0) {
            balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
            return balance;
        }
    }
    function getBalance() {
        console.log(`Current Balance: ${balance}`);
        return balance;
    }
    return {
        deposit,
        withdraw,
        getBalance
    };

}
const myAccount = bankAccount(10000);//initial balance 10000 
myAccount.getBalance();//output: Current Balance: 10000(initial balance is 10000 )
myAccount.deposit(6000);
myAccount.withdraw(5000);
myAccount.getBalance();
//hence balance variable is private and can only be accessed through the methods deposit, withdraw and getBalance
//this is achieved using closure
//closure is a powerful feature in js that allows us to create private variables and methods

//higher order functions 
function greet(name) {
     function innerGreet(message) {
        console.log(`Hello ${name}, ${message}`);
    }
    return innerGreet;
}
const greetJohn = greet("John");
console.log(greetJohn); //output: [Function: innerGreet]
console.log(greetJohn("Welcome to the platform!")); //output: Hello John, Welcome to the platform!
//hence greet is a higher order function that returns another function innerGreet
//innerGreet has access to the variable name of the outer function greet due to closure
const greetJane = greet("Jane")("Good to see you here!");//this is also same as above but called immediately
console.log(greetJane); //output: Hello Jane, Good to see you here!