const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default class PokemonApiService {

    constructor() {
        this.page = 0;
    };

    //fetchPokemonList() {
//
    //    const params = new URLSearchParams({
    //        limit: 30,
    //        offset: this.page,
    //    });
//
    //    return fetch(`${BASE_URL}?${params}`)
    //        .then((res) => res.json())
    //        .then(list => {
    //            //console.log(list);
    //            this.incrementPage();
    //            return list.results;
    //        });
    //};
    async fetchPokemonList() {

        const params = new URLSearchParams({
            limit: 30,
            offset: this.page,
        });

        const res = await fetch(`${BASE_URL}?${params}`);
        const list = await res.json();
        //console.log(list);
        this.incrementPage();
        return list.results;
    };

    async fetchPokemonByIdOrName(pokemonId) {
        //return fetch(`${BASE_URL}/${pokemonId}`)
        //    .then((res) => res.json())
        //    .then(pokemon => {
        //        return pokemon;
        //    });
        const res = await fetch(`${BASE_URL}/${pokemonId}`);
        const pokemon = await res.json();
        return pokemon;
    };

    incrementPage() {
        this.page += 30;
    };

    resetPage() {
        this.page = 0;
    };
    
};
