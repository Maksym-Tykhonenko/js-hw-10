export function fetchPokemonById(id) {
    
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
    
};