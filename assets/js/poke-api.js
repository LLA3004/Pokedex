const pokeApi = {};

// Corrigir a função de conversão
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon(); // Nome da classe correto
    pokemon.number = pokeDetail.id; // Corrigir para usar ID em vez de `order`
    pokemon.name = pokeDetail.name;

    // Extrair os tipos
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    // Corrigir o caminho para a foto
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

// Obter detalhes de um Pokémon
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
};

// Obter lista de Pokémon com detalhes
pokeApi.getPokemons = (offset = 0, limit = 150) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .catch((error) => {
            console.error("Erro ao buscar Pokémon:", error);
            return [];
        });
};
