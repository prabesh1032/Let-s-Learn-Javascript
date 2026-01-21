//for each,filtered,map,reduce,some,every

//forEach method executes a provided function once for each array element.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2); //output: 2,4,6,8,10
});

//using arrow function
numbers.forEach((number) => {
    console.log(number + 1)//output: 2,3,4,5,6
}); 

//using index,array and value
numbers.forEach((number, index, array) => {
    console.log(`Index: ${index}, Value: ${number}, Array: ${array}`);
});
//output:
//Index: 0, Value: 1, Array: 1,2,3,4,5
//Index: 1, Value: 2, Array: 1,2,3,4,5
//Index: 2, Value: 3, Array: 1,2,3,4,5
//Index: 3, Value: 4, Array: 1,2,3,4,5
//Index: 4, Value: 5, Array: 1,2,3,4,5

//note: forEach does not return a new array, it simply executes the provided function once for each array element

//filter
//filter method creates a new array with all elements that pass the test by the provided function.
num = [10, 15, 20, 25, 30];
const filter = num.filter(function(number) {
    return number > 18; //returns true or false
});
console.log(filter); //output: [20,25,30]

const filterArrow = num.filter((number) =>{ 
    return number % 2 === 0
});
console.log(filterArrow); //output: [10,20,30]


//mapping
const a = [1, 2, 3, 4, 5];
const mappedArray = a.map((number) => {
    return number * 3; //returns the new value
});
console.log(mappedArray); //output: [3,6,9,12,15]
//difference between forEach and map and filter
//forEach does not return a new array, it simply executes the provided function once for each array element
//in simple words, forEach is used for iteration only
//filters returns a new array with all elements that pass the test by the provided function
//in simple words, filter is used for filtering elements based on condition
//map returns a new array with the results of calling a provided function on every element in the calling array
//in simple words, map is used for transforming elements

//real life example
const products = [
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Shirt", price: 50, category: "Clothing"},
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Pants", price: 60, category: "Clothing"},
];
//filtering electronics products
const electronics = products.filter((product) => {
    return product.category === "Electronics";
}).sort((a, b) => a.price - b.price); //sorting by price in ascending order
console.log(electronics);
//output: [ { name: 'Phone', price: 500, category: 'Electronics' },
//          { name: 'Laptop', price: 1000, category: 'Electronics' } ]
//mapping product names and prices
const productDetails = products.map((product) => {
    return {name: product.name, price: product.price};
});
console.log(productDetails);
//output: [ { name: 'Laptop', price: 1000 },
//          { name: 'Shirt', price: 50 },
//          { name: 'Phone', price: 500 },
//          { name: 'Pants', price: 60 } ]

//reducer
//reduce method executes a reducer function on each element of the array, resulting in a single output value.
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); //0 is the initial value of accumulator
console.log(sum); //output: 15
//calculating total price of products
productTotal = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);
console.log(productTotal); //output: 1610
//sum of product prices with category Electronics
const electronicsTotal = products.reduce((accumulator, currentValue) => {
    if (currentValue.category === "Electronics") {
        return accumulator + currentValue.price;
    } else 
    return accumulator;
}, 0);
console.log(electronicsTotal); //output: 1500

//data struture:set
const arrrr = [1, 2, 2, 3, 4, 4, 5];
const set1 = new Set(arrrr); //set will automatically remove duplicates
console.log(set1); //output: Set(5) { 1, 2, 3, 4, 5 }
set1.add(6);
console.log(set1); //output: Set(6) { 1, 2, 3, 4, 5, 6 }
set1.delete(3);
console.log(set1); //output: Set(5) { 1, 2, 4, 5, 6 }
console.log(set1.has(4)); //output: true
console.log(set1.size); //output: 
console.log(set1.clear()); //output: undefined
console.log(set1); //output: Set(0) {}

//real life example: removing duplicates from array
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
const uniqueNames = [...new Set(names)]; //using spread operator to convert set back to array
console.log(uniqueNames); //output: [ 'Alice', 'Bob', 'Charlie' ]


//data struture:map
const map1 = new Map(
    [['name', 'John'],
    ['age', 25],
    ['city', 'New York']
]
);
console.log(map1); //output: Map(3) { 'name' => 'John', 'age' => 25, 'city' => 'New York' }
map1.set('country', 'USA');
map1.set({name:manish,age:30},true); //updating map with object as key
console.log(map1);//output: Map(5) { 'name' => 'John', 'age' => 25, 'city' => 'New York', 'country' => 'USA', { name: manish, age: 30 } => true }
console.log(map1.get('age')); //output: 25
map1.delete('city');
map1.delete({name:manish,age:30});//this will not delete the key as object reference is different
console.log(map1); //output: Map(4) { 'name' => 'John', 'age' => 25, 'country' => 'USA', { name: manish, age: 30 } => true }
console.log(map1.has('name')); //output: true
console.log(map1.size); //output: 4
map1.clear();
console.log(map1); //output: Map(0) {}