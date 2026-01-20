//operator
//operators are used to perform operations on variables and values

//Arithmetic Operators
let a = 10;
let b = 5;
console.log(`(additional)a + b = ${a + b}`); // Addition
console.log(`(subtraction)a - b = ${a - b}`); // Subtraction
console.log(`(multiplication)a * b = ${a * b}`); // Multiplication
console.log(`(division)a / b = ${a / b}`); // Division
console.log(`(modulus)a % b = ${a % b}`); // Modulus
console.log(`(exponentiation)a ** b = ${a ** b}`); // Exponentiation


//assignment Operators
x=20;
y=10;
x += y; // x = x + y
console.log(`(x += y)x = ${x}`);
x -= y; // x = x - y
console.log(`(x -= y)x = ${x}`);
x *= y; // x = x * y
console.log(`(x *= y)x = ${x}`);
x /= y; // x = x / y
console.log(`(x /= y)x = ${x}`);
x %= y; // x = x % y
console.log(`(x %= y)x = ${x}`);


//Comparison Operators
m = 15;
n = 10;
console.log(`(is m equal to n)m == n: ${m == n}`);//normal equality
console.log(`(is m strictly equal to n)m === n: ${m === n}`);//strict equality
// Strict equality checks both value and type, normoral equality checks only value
console.log(`(is m not equal to n)m != n: ${m != n}`);
console.log(`(is m greater than n)m > n: ${m > n}`);
console.log(`(is m less than n)m < n: ${m < n}`);
console.log(`(is m greater than or equal to n)m >= n: ${m >= n}`);
console.log(`(is m less than or equal to n)m <= n: ${m <= n}`);

//converting string to number 
let p="30";
let q=Number(p);
console.log(`Value of p: ${p}, Value of q: ${q}`);
console.log(`(string to number)Type of p: ${typeof p}, Type of q: ${typeof q}`);

let r="20ghj";
let s=Number(r);
console.log(`Value of r: ${r}, Value of s: ${s}`);
console.log(`(string to number)Type of r: ${typeof r}, Type of s: ${typeof s}`);
//NaN(Not a Number) is the result of converting a non-numeric string to a number and its type is 'number'
//NaN is a special value in JavaScript that indicates an invalid number

//converting number to string
let num=100;
let str=String(num);
console.log(`Value of num: ${num}, Value of str: ${str}`);
console.log(`(number to string)Type of num: ${typeof num}, Type of str: ${typeof str}`);
//

//boolean to number
console.log(`(boolean to number)Number(true): ${Number(true)}`); //1
console.log(`(boolean to number)Number(false): ${Number(false)}`); //0
//true converts to 1 and false converts to 0

//number to boolean
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-5)); //true
console.log(Boolean(NaN)); //false
//boolean conversion: 0, NaN, null, undefined, and empty string("") convert to false; all other values convert to true

//string to boolean
console.log(Boolean("Hello")); //true
console.log(Boolean("")); //false
//non-empty strings convert to true; empty string("") converts to false

//boolean to string
console.log(String(true));
console.log(String(false)); //true converts to "true" and false converts to "false"

//float logic
a=0.1;
b=0.2;
c=a+b;
console.log( c); //0.30000000000000004
//due to precision issues with floating point arithmetic, 0.1 + 0.2 does not exactly equal 0.3
console.log(`(float logic)Is c equal to 0.3? ${c === 0.3}`); //false
//Solution: Use toFixed() to round
console.log(parseFloat(c.toFixed(1))); // 0.3
console.log(`Is c equal to 0.3? ${parseFloat(c.toFixed(1)) === 0.3}`); // true


//some rules in js
//null is equal to undefined in normal equality but not in strict equality
console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(null==0); //false
console.log(undefined==0); //false
//<,>,<=,>= comparisons between null/undefined and numbers result in false
console.log(null>0); //false
console.log(null<0); //false
console.log(null>=0); //false
console.log(undefined>=0); //false  
//NaN is not equal to anything, including itself
console.log(NaN==NaN); //false
console.log(NaN===NaN); //false
console.log("mohot">"ram"); //true (lexicographical comparison means ascii value comparison)
console.log("apple"<"banana"); //true (lexicographical comparison)
console.log("5">3); //true (string "5" is converted to number 5)
console.log("5"<"12"); //false (lexicographical comparison)


//logical operators
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true

console.log("mohit"&&"ram"); //"ram" (returns the last truthy value
console.log("ram"||"sita");//"ram" (returns the first truthy value)
console.log(0&&20); //0 (returns the first falsy value)
console.log(10||0); //10 (returns the first truthy value)