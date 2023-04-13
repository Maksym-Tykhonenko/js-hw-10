const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export function fetchPokemonById(id) {
    
    return fetch(`${BASE_URL}/${id}`)
        .then((res) => res.json())
    
};

export function fetchPokemonList() {

    let page = 0;

    const params = new URLSearchParams({
        limit: 30,
        offset: page,
    });
    
    return fetch(`${BASE_URL}?${params}`)
        .then((res)=> res.json())
};
