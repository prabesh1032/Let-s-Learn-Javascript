//date
const date = new Date();
console.log(date);
//it show current date and time utc formatx 

console.log(date.toString());
//it show current date and time in local format

console.log(date.toDateString());
//it show current date in local format

console.log(date.getDay());
//it show current day in number 0-6 (0-sunday,1-monday,2-tuesday,3-wednesday........)

console.log(date.getMonth());
//it show current month in number 0-11 (0-january,1-february,2-march,....11-december)

console.log(date.getDate());
//it show current date in number 1-31

console.log(date.getFullYear());
//it show current year in 4 digit

console.log(date.getHours());
//it show current hour in 24 hour format

console.log(date.getMinutes());
//it show current minutes

console.log(date.getSeconds());
//it show current seconds

const now =new Date(2024,5,15,10,30,0);
console.log(now);//it show date and time as per given input but month is 0-11 so 5 means june
console.log(now.toString());//it show date and time in local format

const noow= Date.now();
console.log(noow);//it show current date and time in milliseconds since january 1,1970
const d=new Date(-567898765);
console.log(d);//it show date and time as per given milliseconds since january 1,1970


