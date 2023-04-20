import './css/styles.css';
import debounce from 'lodash.debounce';
//import { fetchPokemonById, fetchPokemonList } from './fetchpokemon';
import NewPokemonApiService from './pokemon-service';


const DEBOUNCE_DELAY = 1000;

const refs = {
    input: document.querySelector('#search-box'),
    btn: document.querySelector('.poke-list'),
    pokemonList: document.querySelector('.pokemon-list'),
    pokemonInfo: document.querySelector('.pokemon-info'),
    loadMoreBtn: document.querySelector('.load-more'),
};

refs.input.addEventListener('input', debounce(searchPokemonFromInput, DEBOUNCE_DELAY));
refs.btn.addEventListener('click', searchPokemonList);
refs.pokemonList.addEventListener('click', searchPokemonByName);
refs.loadMoreBtn.addEventListener('click', searchOnLoadMore);

const newPokemonApiService = new NewPokemonApiService();
//console.log(newPokemonApiService)
searchPokemonList();

//////////////////////function search//////////////////
function searchPokemonList() {

    newPokemonApiService.resetPage();
    newPokemonApiService.fetchPokemonList().then(list => {
        //console.log(list);
        visibleBtn();

        pokemonInfoReset();
        pokemonListReset();

        renderPokemonList(list)
    });
};

function searchPokemonFromInput(event) {
    event.preventDefault();
    let pokemonId = event.target.value.toLowerCase().trim()
    console.log(pokemonId);
    //GRIMER
    newPokemonApiService.fetchPokemonByIdOrName(pokemonId)
        .then(pokemon => { 
            //console.log(pokemon);
            pokemonInfoReset();
            pokemonListReset();
            renderPokemon(pokemon);
            inputReset(event);

            invisibleBtn();
        });

};

function searchPokemonByName(event) {
    event.preventDefault();
    
    const pokemonName = event.target.textContent;
    //console.log(pokemonName);

    pokemonInfoReset();

    newPokemonApiService.fetchPokemonByIdOrName(pokemonName)
        .then(pokemon => {
            pokemonListReset();
            renderPokemon(pokemon);

            invisibleBtn();
        });
};

function searchOnLoadMore() {
    newPokemonApiService.fetchPokemonList().then(list => {
        //console.log(list);
        renderPokemonList(list);
    })
};
/////////////////////////function render////////////////
function renderPokemon (pokemon) {
    const {
        sprites,
        name,
        height, weight,
        base_experience,
        id
    } = pokemon;
    
    const markup = `<img  src='${sprites.front_default}' alt='${name}' height='200' class="info-flag">
        <img  src='${sprites.back_default}' alt='${name}' height='200' class="info-flag">
        <div><p>ІМ'Я: ${name.toUpperCase()}</p>
        <p>ЗРІСТ: ${height}</p>
        <p>ВАГА: ${weight}</p>
        <p>СИЛА: ${base_experience}</p>
        <p>ID: ${id}</p></div>
        `;

    refs.pokemonInfo.insertAdjacentHTML('afterbegin', markup);
};

function renderPokemonList(list) {
    
    const markupList = list.map(({ name }) => {
        return `<li class="pokemon-item">
            <a href="#" class="pokemon-name">${name}</a></li>`
    }).join('');

    refs.pokemonList.insertAdjacentHTML('beforeend', markupList);
};

////////////////////function reset////////////
function inputReset (event) {
    event.target.value = '';
};
function pokemonInfoReset() {
    refs.pokemonInfo.innerHTML = '';
};
function pokemonListReset() {
    refs.pokemonList.innerHTML = '';
};

/////////////////////function for load more btn////////////////////////
function invisibleBtn() {
    refs.loadMoreBtn.classList.add("none-btn");
};
function visibleBtn() {
    refs.loadMoreBtn.classList.remove("none-btn");
};
//////////////////////////////////////////////////////

async function fetchCountrie(currency) {
    const res = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
    const countrie = await res.json();
    console.log(countrie)
    return countrie;
};
//fetchCountrie('deutschland');
//fetchCountrie('ukrai');
fetchCountrie('hryvnia');
fetchCountrie('euro');
