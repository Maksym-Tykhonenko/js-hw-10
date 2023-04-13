export default class PokemonApiService {
    constructor() {
        this.BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
        this.page = 0;
    };

    fetchPokemonList() {

        const params = new URLSearchParams({
            limit: 30,
            offset: this.page,
        });

        return fetch(`${this.BASE_URL}?${params}`)
            .then((res) => res.json())
            .then(list => {
                //console.log(list);
                this.incrementPage();
                return list.results;
            });
    };

    fetchPokemonByIdOrName(pokemonId) {
        return fetch(`${this.BASE_URL}/${pokemonId}`)
            .then((res) => res.json())
            .then(pokemon => {
                return pokemon;
            });
    };

    incrementPage() {
        this.page += 30;
    };

};
