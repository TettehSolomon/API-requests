//fetch - a JavaScript function used in making http requests to fetch resources

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data => console.log(data.results[0]))
.catch(error => console.error(error))