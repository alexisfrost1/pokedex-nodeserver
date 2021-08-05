const fetch = require('node-fetch')

let pokemonsModel = {};
const apiUrl = 'https://pokeapi.co/api/v2/'

pokemonsModel.getPokemons = () => {
    const pokemons = fetch(apiUrl + 'pokemon')
    .then(res => res.json())
    return pokemons
}

pokemonsModel.getPokemonsById = (pokemonId) => {
    const pokemon = fetch(apiUrl + 'pokemon/'+ pokemonId)
    .then(res => res.json())
    return pokemon
}
pokemonsModel.getPokemonsByName = (pokemonName) => {
    const pokemon = fetch(apiUrl + 'pokemon/'+ pokemonName)
    .then(res => res.json())
    return pokemon
}
pokemonsModel.getEvoById = (pokemonId) => {
    const evo = fetch(apiUrl + 'evolution-chain/'+ pokemonId)
    .then(res => res.json())
    return evo
}

module.exports = pokemonsModel;