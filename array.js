//array
//array helps to store multiple values in a single variable
let marks = [34, 23, 24, 93, 73, 25];
console.log(marks);//output: [34, 23, 24, 93, 73, 25]
//it show all the values in the array

console.log(marks.length);//output: 6
//it show the length of the array

console.log(marks[0]);//output: 34
//it show the first value of the array

console.log(marks[3]);//output: 93
//it show the fourth value of the array

let array = ["hello", 45, true, null];
console.log(array);//output: ["hello", 45, true, null]
//it show all the values in the array
array[1] = 99;
console.log(array);//output: ["hello", 99, true, null]
//it show the updated array after changing the second value to 99
//arrays are mutable, we can change the values in the array

array.push("new value");
console.log(array);//output: ["hello", 99, true, null, "new value"]
//it show the updated array after adding a new value at the end

array.pop();
console.log(array);//output: ["hello", 99, true, null]
//it show the updated array after removing the last value

array.unshift("first value");
console.log(array);//output: ["first value", "hello", 99, true, null]
//it show the updated array after adding a new value at the beginning
array.shift();
console.log(array);//output: ["hello", 99, true, null]
//it show the updated array after removing the first value
//push, pop, add at the end, shift, unshift, add at the beginning are some common array methods
//however  shift and unshift are less commonly used compared to push and pop due to performance reasons


//iterating arrays
let scores = [34, 23, 24, 93, 73, 25];
for (let i = 0; i < scores.length; i++) {
    console.log("The score at index " + i + " is " + scores[i]);
}
//for of loop
for (let score of scores) {
    console.log("The score is " + score);
}

let a=[1,2,3];
let b=a;//b is reference to a
b.push(4);
console.log(a);//output: [1,2,3,4]
//it show that when we change b, a also changes because both a and b reference the same array in memory. it is copy by reference. 

const x=[1,2,3];
//x=[4,5,6];//this will give error because x is constant reference to the array [1,2,3] and we cannot reassign it to a new array. However, we can still modify the contents of the array.
x.push(4);
console.log(x);//output: [1,2,3,4]
//it show that we can modify the contents of the array even if the reference is constant.
let y=[1,2,3];
y=[4,5,6];
console.log(y);//output: [4,5,6]
//it show that we can reassign y to a new array because y is not a constant reference.

//slice  in array
let nums=[10,20,30,40,50,60,70,80,90];
console.log(nums.slice(2,5));//output: [30,40,50]
//it show the sliced array from index 2 to index 5 (excluding index 5)
nums.splice(1,3);
console.log(nums);//output: [10,50,60,70,80,90]
//it show the array after removing 3 elements from index 1
nums.splice(2,4,25,35);
console.log(nums);//output: [10,50,25,35,90]
//it show the array after removing 4 elements from index 2 and adding 25 and 35 at index 2
//difference between slice and splice is that slice does not modify the original array, it returns a new array, whereas splice modifies the original array.

//spread operator in array
let arr1=[1,2,3];
let arr2=[4,5,6];
let combined =arr1+arr2;
console.log(cobimed);//output: 1,2,34,5,6
//it show that using + operator on arrays results in string concatenation of the arrays, not combining them.
let combined2=arr1.concat(arr2);
console.log(combined2);//output: [1,2,3,4,5,6]
//it show the combined array using concat method
let combine4=[arr1,arr2,combined2];
console.log(combine4);//output: [[1,2,3],[4,5,6],[1,2,3,4,5,6]]
//it show an array of arrays, where each element is one of the original arrays or the combined array.
//this is different from combining the arrays into a single array.
let combined3=[...arr1,...arr2];
console.log(combined3);//output: [1,2,3,4,5,6]
//it show the combined array using spread operator. it is a more modern and concise way to combine arrays.
//difference between concat and spread operator is that concat is a method, whereas spread operator is a syntax feature of the language.

//converting array to string
let fruits=["apple","banana","cherry"];
let fruitString=fruits.toString();
console.log(fruitString);
console.log(typeof fruitString);//output: apple,banana,cherry  string
console.log(fruits.join(" - "));//output: apple - banana - cherry
//it show the array converted to string using toString and join methods. join allows us to specify a separator between the elements.
//difference between toString and join is that toString uses comma as default separator, whereas join allows us to specify a custom separator.

//searching in array
let colors=["red","green","blue","yellow","green"];
console.log(colors.indexOf("green"));//output: 1
//it show the index of the first occurrence of "green" in the array
console.log(colors.lastIndexOf("green"));//output: 4
//it show the index of the last occurrence of "green" in the array
console.log(colors.includes("blue"));//output: true
//it show whether "blue" is present in the array or not
//these methods are useful for searching elements in an array.

//sorting array
const names=["John","Alice","Bob","Charlie"];
names.sort();
console.log(names);//output: ["Alice","Bob","Charlie","John"]
//it show the sorted array in ascending order
names.reverse();
console.log(names);//output: ["John","Charlie","Bob","Alice"]
//it show the sorted array in descending order
//sort method sorts the array in place and modifies the original array.

const naames=["john","alice","Bob","Charlie"];
naames.sort();
console.log(naames);//output: ["Bob","Charlie","alice","john"]
//it show that sort method is case sensitive and sorts uppercase letters before lowercase letters.
//it sort on the basic of ascii values of the characters.
const n=[40,100,1,5,25,10];
n.sort();
console.log(n);//output: [1,10,100,25,40,5]
//it show that sort method does not sort numbers correctly because it converts them to strings and sorts based on string comparison.
n.sort(function(a,b){return a-b});
console.log(n);//output: [1,5,10,25,40,100]
//it show the correct way to sort numbers in ascending order using a compare function.
//for descending order, we can use return b-a in the compare function.
n.reverse();
console.log(n);//output: [100,40,25,10,5,1]
//it show the sorted array in descending order after sorting it in ascending order first.

//flattening array
let nestedArray=[1,2,[3,4],[5,6,[7,8]]];
console.log(nestedArray[3]);//output: [5,6,[7,8]]
console.log(nestedArray[3][2]);//output: [7,8]
console.log(nestedArray[3][2][0]);//output: 7
//it show how to access elements in a nested array using multiple indices.
let flatArray=nestedArray.flat(2);
console.log(flatArray);//output: [1,2,3,4,5,6,7,8]
//it show the array flattened up to 2 levels deep using flat method. 
console.log(nestedArray.flat(Infinity));
//output: [1,2,3,4,5,6,7,8]
//it show the array completely flattened using flat method with Infinity as depth.

//why javascript arrays are not actually arrays
//in javascript, arrays are implemented as objects with special properties and methods to handle array-like behavior. 
//this means that javascript arrays can hold elements of different types, can dynamically resize, and have built-in methods for common array operations.
//however, this also means that javascript arrays do not have the same performance characteristics as traditional arrays in other programming languages, which are typically fixed-size and homogeneous.
//as a result, certain operations on javascript arrays may be slower or less efficient compared to traditional arrays.