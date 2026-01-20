//object
const obj = {
  name: "Prabesh",
  age: 30,
  city: "Beldiha",
  phone: "123-456-7890"
};
console.log(obj);
//objects are used to store multiple values in a single variable as key-value pairs.

console.log(`Name: ${obj.name}`); //accessing value using dot notation
console.log(`City: ${obj.city}`); //accessing value using dot notation
console.log(`City: ${obj["city"]}`); //accessing value using bracket notation
console.log(`Age: ${obj["age"]}`); //accessing value using bracket notation

obj.salary = 50000; //adding new key-value pair
console.log(obj);
//it show the updated object with new key-value pair
obj.age = 31; //updating existing value
console.log(obj);//output: { name: 'Prabesh', age: 31, city: 'Beldiha', phone: '123-456-7890', salary: 50000 }
//it show the updated object with updated age value
delete obj.phone; //deleting key-value pair
console.log(obj);//output: { name: 'Prabesh', age: 31, city: 'Beldiha', salary: 50000 }
//it show the updated object with deleted phone key-value pair


//CURD operations on object
//create
const person = {
    name: "Prabesh",
    age: 22,
};
console.log(person);//output: { name: 'Prabesh', age: 22 }
//read
console.log(person.name);//output: Prabesh
console.log(person['age']);//output: 22
//update
person.age = 23;
console.log(person);//output: { name: 'Prabesh', age: 23 }
//delete
delete person.age;
console.log(person);//output: { name: 'Prabesh' }

const person2 = person; //person2 is reference to person
person2.name = "RAM";
person2.age = 25;
console.log(person);//output: { name: 'RAM', age: 25 }
//it show that when we change person2, person also changes because both person and person2 reference the same object in memory. it is copy by reference.

console.log(Object.keys(person));//output: [ 'name', 'age' ]
console.log(Object.values(person));//output: [ 'RAM', 25 ]
console.log(Object.entries(person));//output: [ [ 'name', 'RAM' ], [ 'age', 25 ] ]
//Object.keys(), Object.values(), Object.entries() are some common object methods to get keys, values and key-value pairs of the object respectively.

//for iterating objects
for (let key in person) {
    console.log(`The ${key} of person is ${person[key]}`);
}


//destructuring objects
const name=person.name;
const age=person.age;
console.log(`Name: ${name}, Age: ${age}`);//output: Name: RAM, Age: 25
//it show the name and age of the person object.but this is not the recommended way to extract values from an object.
//we can use destructuring to extract values from an object in a cleaner way.

const {name: personName, age: personAge} = person;
console.log(`Name: ${personName}, Age: ${personAge}`);//output: Name: RAM, Age: 25
//it show the name and age of the person object using destructuring. This is the recommended way to extract values from an object.

//we can do similar destructuring in array as well.
const arr = [1, 2, 3];
const [first, second, third] = arr;
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);//output: First: 1, Second: 2, Third: 3
//it show the values of the array using destructuring.

//for off loop with object
const tempPerson = Object.values(person);
const keys = Object.keys(person);
console.log(keys);//output: [ 'name', 'age' ]
console.log(tempPerson);//output: [ 'RAM', 25 ]
//values method with for of loop
for (let value of tempPerson) {
    console.log(`Value: ${value}`);
}//output: Value: RAM
//it show the values of the object using for of loop
//keys method with for of loop
for (let key of keys) {
    console.log(`Key: ${key}`);
}//output: Key: name
//it show the keys of the object using for of loop
//entries method with for of loop
console.log(Object.entries(person));//output: [ [ 'name', 'RAM' ], [ 'age', 25 ] ]
//it show the key-value pairs of the object as array of arrays
//using destructuring in for of loop
for (let [key, value] of Object.entries(person)) {
    console.log(`The ${key} of person is ${value}`);
}
//we can use for of loop with Object.entries() to iterate over key-value pairs of the object.


//function in object
const user = {
    username: 'prabesh22',
    password: 'securePass123',
    greeting: function() {
        console.log(`Hello ${this.username} Welcome back.`);
    }
};
console.log(user.username);//output: prabesh22
const greeting =user.greeting();
console.log(greeting);//output: Hello prabesh22 Welcome back.
//it show the username of the user object and call the greeting function of the user object.

user.username= "pratik"
console.log(user.username);//output: pratik
user.greeting();//output: Hello pratik Welcome back.

const user2={
    name:'Alice',
    age:28,
}
user2.greeting = user.greeting; //adding greeting function to user2 object
user2.greeting();//output: Hello Alice Welcome back.
//it show that we can add function from one object to another object and it will work as expected.

//nested object
const student = {
    name: "prabesh",
    age: 23,
    address: {
        street: "123 Main",
        city: "Beldiha",
    },
    courses: ["Math", "Science", "History"],
};
console.log(student);
console.log(student.address.city);//output: Beldiha
console.log(student.courses[1]);//output: Science
//it show the student object with nested address object and courses array.

const student2 ={...student};//shallow copy of student object
student2.name = "ram";
student2.address.city = "New City";
console.log(student.name);//output: prabesh
console.log(student2.name);//output: ram
console.log(student.address.city);//output: New City
console.log(student2.address.city);//output: New City
//it show that when we change the nested object in student2, it also changes in student because it is a shallow copy. only the top-level properties are copied, but nested objects are still referenced. 
const student3= structuredClone(student);//deep copy of student object
student3.name = "shyam";
student3.address.city = "Old City";
console.log(student.name);//output: prabesh
console.log(student.address.city);//output: New City
console.log(student3.name);//output: shyam
console.log(student3.address.city);//output: Old City
//it show that when we change the nested object in student3, it does not change in student because it is a deep copy. all levels of the object are copied independently. 

//symbols as keys in object
const sym1 = Symbol('id');
const sym2 = Symbol('id');
const user3 = {
    name: 'Prabesh',
    sym1:101,//this is string key not symbol key
    [sym1]: 101,
    [sym2]: "hii how are you?",
};
console.log(user3);//output: { name: 'Prabesh', sym1: 101, [Symbol(id)]: 101, [Symbol(id)]: 'hii how are you?'`` }
console.log(user3[sym1]);//output: 101
console.log(user3[sym2]);//output: hii how are you?
//it show that symbols are unique and can be used as keys in object. even though sym1 and sym2 have the same description, they are different symbols.