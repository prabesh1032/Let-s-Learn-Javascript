 // async function greet() {
 //     return "Prabesh"; //it will return a promise that resolves to "Prabesh"
 //     //this is equivalent to writing
 //     //return Promise.resolve("Prabesh"); or
 //     //return Promise.reject("rejectprabesh");
 //     //return new Promise((resolve, reject) => {
 //     //    resolve("Prabesh");
 // }
 // const response = greet();
 // //console.log(response); //output: Promise { 'Prabesh' }.//if we add async keyword before a function, it will always return a promise
 // response.then((data) => {
 //     console.log("Greeting received: " + data); //output: Greeting received: Prabesh
 // }).catch((error) => {
 //     console.log("Error: " + error);
 // }); 

 //async and await helps to write cleaner and more readable code when working with promises
 async function fetchData() {
     console.log("Fetching data from GitHub API...");
     const response = await fetch('https://api.github.com/users');
     const data = await response.json();
     console.log(data);
 }
 fetchData();
 console.log("i am after fetchData function call");

 //explanation of the above code
 //the output will be:
 //Fetching data from GitHub API...
 //i am after fetchData function call
 //[{...},{...},...]
 //this is because the fetchData function is asynchronous and it will not block the execution of the code after it

 //parallel execution using async await
 async function usersData() {
    //const comment = await fetch('https://jsonplaceholder.typicode.com/comments');
    //const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    //const users = await fetch('https://jsonplaceholder.typicode.com/users');
    //this will take more time as each fetch will wait for the previous one to complete

    const[comment, posts, users] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ]);
    console.log("Comments fetched: ", await comment.json());
    console.log("Posts fetched: ", await posts.json());
    console.log("Users fetched: ", await users.json());
    //this will fetch all the data in parallel and will be faster
 }
