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
   or setting timers—anything that might take some time to complete.*/
