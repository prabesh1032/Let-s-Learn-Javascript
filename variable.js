//variable in JavaScript(let, const, var)
    //let
    let score = 90;
    let name = 'Bob';
    //we can update value of let variable
    score = 95;
    name = 'Alice';
    //let name = 'David'; // This will cause an error because name is already declared
    console.log(name, score);
    console.log(`Name: ${name}, Score: ${score}`);
    //we can update let variable but we cannot re-declare it in the same scope.


    //const
    const pi = 3.14;
    //const pi = 3.14159;// This will cause an error because pi is already declared
    //pi = 3.14159; // This will cause an error because pi is a constant
    console.log(`Value of pi: ${pi}`);
    //we cannot update or re-declare const variable.


    //var
    var age = 25;
    console.log(`Age: ${age}`);
    var age = 26;
    console.log(`Updated Age: ${age}`);
    //we can re-declare and update var variable but it's not recommended due to potential issues with scope and hoisting.
    //so using let and const is preferred in modern JavaScript.