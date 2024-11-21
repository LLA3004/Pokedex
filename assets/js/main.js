// Função para converter Pokémon em HTML
function convertPokemontoLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// Referência ao elemento da lista
const pokemonList = document.getElementById("pokemonList");

// Obter e renderizar os Pokémon
pokeApi.getPokemons()
    .then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemontoLi).join("");
        pokemonList.innerHTML = newHtml;
    })
    .catch((error) => console.log("Erro ao renderizar Pokémon:", error));
