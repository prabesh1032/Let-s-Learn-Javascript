//classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Prabesh", 30);
person1.greet(); //Hello, my name is Prabesh and I am 30 years old.
//classes are blueprints for creating objects. it make it easier to create multiple objects with same properties and methods
const person2 = new Person("Sita", 25);
person2.greet(); //Hello, my name is Sita and I am 25 years old.
const person3 = new Person("Ram", 28);
person3.greet(); //Hello, my name is Ram and I am 28 years old.

//in classes, the function inside the class is stored in the prototype of the class,
//so that all the instances of the class can share the same function and save memory



//inheritance in classes
class Customer extends Person {
    constructor(name, age, customerId,accountBalance) {
        super(name, age);
        this.customerId = customerId;
        this.accountBalance = accountBalance;
    }
    displayCustomerInfo() {
        console.log(`Customername: ${this.name}, Customerage: ${this.age} Customer ID: ${this.customerId}, Account Balance: ${this.accountBalance}`);
    }  
}
const customer1 = new Customer("Hari", 35, "C123", 10000);
customer1.greet(); //Hello, my name is Hari and I am 35 years old.
customer1.displayCustomerInfo(); //Customername: Hari, Customerage: 35 Customer ID: C123, Account Balance: 10000