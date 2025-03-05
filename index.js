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