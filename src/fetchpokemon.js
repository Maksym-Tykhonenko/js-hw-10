export function fetchPokemonById(id) {
    
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
    
};

export function fetchPokemonList() {
    
    const params = new URLSearchParams({
        limit: 10,
    });
    
    return fetch(`https://pokeapi.co/api/v2/pokemon?${params}`)
        .then((res)=> res.json())
};
