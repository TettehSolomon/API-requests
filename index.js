//fetch - a JavaScript function used in making http requests to fetch resources

/*
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
.then(response => {
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
    return response.json();
})
.then(data => console.log(data.name))
.catch(error => console.error(error))
*/

//Now Let's use async
async function fetchData(){
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
            console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchData();

/*In JavaScript, asynchronous programming allows you to perform tasks
 without blocking the execution of other code. This is especially useful
  when dealing with tasks like fetching data from a server, reading files,
   or setting timers—anything that might take some time to complete.
   
   
   Asynchronous JavaScript functions, often simply called async functions,
    are a key part of modern JavaScript programming. They allow you to write
     asynchronous code that is more readable and easier to follow compared to
      traditional callback-based or .then()-based code with Promises.




      Here's a quick rundown of async functions:

Defining an Async Function: To define an async function, simply add the async keyword before the function keyword. For example:

javascript
async function fetchData() {
    return "Data fetched!";
}
Returning Promises: An async function always returns a Promise, even if you return a non-Promise value. For example:

javascript
async function sayHello() {
    return "Hello!";
}
sayHello().then(message => console.log(message)); 
   */
