//fetch - a JavaScript function used in making http requests to fetch resources

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => console.log(response))
.catch(error => console.error(error))