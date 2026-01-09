//numbers in js
let a = 10; //integer
let b = 10.55678987; //float
console.log(b.toFixed(3)); //10.557(string)
//toFixed(n) method rounds the number to n decimal places and returns a string

console.log(b.toPrecision(6)); //10.5568(string)
//toPrecision(n) method formats the number to n significant digits and returns a string

console.log(b.toString()); // "10.55678987"
//toString() method converts number to string

//number as a object
let x = new Number(20);
console.log(x); // [Number: 20]
//Using Number object is not recommended; use primitive number type instead
let y = new Number(20);
console.log(x===y); //false
//Even though both x and y represent the same numeric value, they are different objects in memory
//non-primitive types are compared by reference, not by value

//maths operations
console.log(Math.abs(-5)); //5
//absolute value mathod returns the non-negative value of a number
console.log(Math.ceil(4.2)); //5
//ceiling value calculates the smallest integer greater than or equal to a given number
console.log(Math.floor(4.7)); //4
//floor value calculates the largest integer less than or equal to a given number
console.log(Math.round(4.5)); //5
//round value rounds the number to the nearest integer
console.log(Math.max(1, 5, 3, 9, 2));
//max method returns the largest value among the given numbers
console.log(Math.min(1, 5, 3, 9, 2));
//min method returns the smallest value among the given numbers
console.log(Math.pow(2, 3)); //8
//power method calculates the base raised to the exponent
console.log(Math.sqrt(16)); //4
//square root method returns the square root of a number
console.log(Math.random()); //random number between 0 and 1
//random method generates a pseudo-random number between 0 (inclusive) and 1 (exclusive)


//generator for random number from 1 to 9.
console.log(Math.floor(Math.random() * 9) + 1);
//Math.random() generates a random decimal between 0 and 1
//Multiplying by 9 scales it to a range of 0 to 9 (exclusive)
//Math.floor() rounds down to the nearest integer, resulting in values from 0 to 8
//Adding 1 shifts the range to 1 to 9 (inclusive)
//you have to multiply by (max-min+1) and add min to get random number between min and max(inclusive)

//random number betweeen 10 to 20.
console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
//Math.random() * (max - min + 1) + min
//(20 - 10 + 1) = 11
//So, Math.random() * 11 generates a number between 0 (inclusive) and 11 (exclusive)
//Adding 10 shifts the range to 10 (inclusive) to 21 (exclusive), resulting in integers from 10 to 20 (inclusive)

//otp generator of 6 digit
let otp = Math.floor( Math.random() * (999999 - 100000 + 1)+ 100000);
console.log(otp);
//Math.random() * (max - min + 1) + min
//(999999 - 100000 + 1) = 900000
//So, Math.random() * 900000 generates a number between 0 (inclusive) and 900000 (exclusive)
//Adding 100000 shifts the range to 100000 (inclusive) to 1000000 (exclusive), resulting in integers from 100000 to 999999 (inclusive)

 