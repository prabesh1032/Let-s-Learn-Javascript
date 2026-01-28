//prortotypes and classes
//prototype
const obj = {
  name: "prabesh",
  age: 30,
  greet :function() {
    console.log("Hello," );
  }
};
obj.greet(); //Hello
console.log(obj.toString()); //[object Object]  
//toString is not defined in obj but it is available because of prototype
//every object in javascript has a prototype
//similary as toString(), hasOwnProperty() , valueOf() etc are also available through prototype
//  //also in array
//     const arr = [1,2,3,4,5];
//     console.log(arr.length); //5
//     console.log(arr.push(6)); //6
//     console.log(arr); //[1,2,3,4,5,6]
//     console.log(arr.pop());
//     //similarly length, push(), pop() are available through prototype of array

//using prototype 
const object2 ={
    accountNumber: 123456,
    balance: 5000   
}
object2.__proto__ = obj; //setting prototype of object2 to obj. it will inherit properties and methods of obj
//first it will look for the property in object2 if not found it will look in obj, if found it will return the value from obj.
//if it is not found in obj, it will look in object.prototype and last in null
console.log(object2.name);//prabesh
object2.greet(); //Hello,
//array.prototype: it contains methods like push(), pop(), map(), filter(), reduce() etc
//object.prototype: it contains methods like toString(), hasOwnProperty(), valueOf() etc
//__proto_: it is used to access the prototype of an object
//function.prototype: it contains methods like call(), apply(), bind() etc
//object.prototype is the top level prototype from which all objects inherit properties and methods.
//it includes array.prototype, function.prototype and objects etc in its prototype chain

const object3 = Object.create(obj); //creating object3 with prototype obj
object3.name = "Sita";
object3.age = 25;
object3.accountNumber = 654321;
object3.balance = 8000;
console.log(object3.name); //Sita
object3.greet(); //Hello,
console.log(object3.accountNumber); //654321
console.log(object3.balance); //8000
console.log(object3.toString()); //[object Object]
//object3 does not have toString() method but it is available through prototype chain
//first it will look in object3, if not found it will look in obj, if not found it will look in object.prototype and last in null