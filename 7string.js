//string
//we can use single, double or backtick quotes to define a string
const str1 = "rohit";
const str2 = 'kumar';
const day=15;
//backtick allows for multi-line strings and interpolation and expression evaluation
const str3 = `hello
 world from backticks nepal and the day is ${day}`;
console.log(str1, str2, str3);

const str =`my name is prabesh acharya`
console.log(str.length); 
//it returns the length of the string
console.log(str.toUpperCase()); 
//it convert string to uppercase
console.log(str.toLowerCase()); 
//convert to lowercase
console.log(str.includes('prabesh')); 
//check if substring exists
console.log(str.startsWith('my')); 
//check if string starts with substring
console.log(str.endsWith('acharya')); 
//check if string ends with substring
console.log(str.indexOf('acharya'));
//get index of substring 
console.log(str.indexOf('ehgdhjhfjjv'));
//it returns -1 if substring not found
console.log(str.lastIndexOf('a'));
//get last index of substring
console.log(str.includes('acharya',20)); 
//check if substring exists after index 20
console.log(str.slice(11, 18)); 
//extract substring from index 11 to 18
console.log(str.replace('prabesh', 'rohit')); 
//replace substring   
console.log(str);
//original string remains unchanged it is immutable. it returns a new string with the modifications

//slice
const slicedStr = str.slice(3, 9);
console.log(slicedStr); // " name "
//slice extracts a section of a string and returns it as a new string without modifying the original string.
console.log(str.slice(3)); // " name is prabesh acharya"
//if we provide only one argument it slices from that index to the end of the string
console.log(str.slice(-7)); // "acharya"
//negative index counts from the end of the string
console.log(str.slice(-13, -7)); // "prabesh"
//negative indices can also be used for both start and end positions

//substring 
console.log(str.substring(3, 9)); // " name "
//substring is similar to slice but does not accept negative indices
console.log(str.substring(9, 3)); // " name "
//if start index is greater than end index, substring swaps them
console.log(str.substring(-7)); // "my name is prabesh acharya"
//negative indices are treated as 0

//concat
const p="hello "
const q="world"
r=p+" "+q
console.log(r); // "hello world"
//we can also use + operator to concatenate strings but concat method is more readable
const strA = "Hello, ";
const strB = "world!";
const combinedStr = strA.concat(strB);
console.log(combinedStr); // "Hello, world!"
//concat joins two or more strings and returns a new string

//replace 
const sstr="JavaScript is fun. I love JavaScript.";
console.log(sstr.replace('JavaScript', 'JS')); //jS is fun. I love JavaScript.
//it replaces only the first occurrence of the substring
console.log(sstr.replaceAll('JavaScript', 'JS')); //JS is fun. I love JS.
//it replaces all occurrences of the substring

//trim
const ss ="          Hii prabesh how are you?               "
console.log(ss.trim());//"Hii prabesh how are you?"
//trim removes whitespace from both ends of the string
console.log(ss.trimStart());//"Hii prabesh how are you?               "
//trimStart removes whitespace from the start of the string
console.log(ss.trimEnd());//"          Hii prabesh how are you?"
//trimEnd removes whitespace from the end of the string

//split
const fruits = "apple,banana,cherry,dates";
const fruitArray = fruits.split(",");
console.log(fruitArray); // ["apple", "banana", "cherry", "dates"]
//split divides a string into an array of substrings based on a specified separator