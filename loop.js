//loops in js
//for loop
//post increment
for(let i=0;i<5;i++){
    console.log(`For Loop Iteration: ${i}`);
}
//post decrement
for(let i=5;i>0;i--){
    console.log(`For Loop Iteration: ${i}`);
}

//while loop
 let i=0;
while(i<5){
    console.log(`While Loop Iteration: ${i}`);
    i++;
}

//do while loop
let j=0;
do{
    console.log(`Do While Loop Iteration: ${j}`);
    j++;
}while(j<5);
//difference between while and do while is that do while executes the loop body at least once before checking the condition.

//if else condition
let age=18;
if(age>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}
//nested if else
let marks=85;
if(marks>=90){
    console.log("Grade: A");
}  else if(marks>=80){
    console.log("Grade: B");
} else if(marks>=70){
    console.log("Grade: C");
} else{
    console.log("Grade: D");
}
//if else inside loop
for(let k=0;k<10;k++){
    if(k%2===0){
        console.log(`${k} is even`);
    }else{
        console.log(`${k} is odd`);
    }
}