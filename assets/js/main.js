const offset = '0';
const limit = '10';
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        console.log(jsonBody); // Exibe todo o JSON recebido
        return jsonBody.results; // Retorna a lista de Pokémon para o próximo then
    })
    .then((pokemonList) => {
        debugger
        console.log(pokemonList); // Exibe a lista de Pokémon
    })
    .catch((error) => console.log(error));
