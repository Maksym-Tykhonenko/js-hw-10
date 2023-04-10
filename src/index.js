import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchPokemonById, fetchPokemonList } from './fetchpokemon';

const DEBOUNCE_DELAY = 1500;

const refs = {
    input: document.querySelector('#search-box'),
    btn: document.querySelector('.poke-list'),
    pokemonList: document.querySelector('.pokemon-list'),
    pokemonInfo: document.querySelector('.pokemon-info'),
};

refs.input.addEventListener('input', debounce(searchPokemonFromInput, DEBOUNCE_DELAY));
refs.btn.addEventListener('click', searchPokemonList);
refs.pokemonList.addEventListener('click', searchPokemonByName);

searchPokemonList();

//////////////////////function search//////////////////
function searchPokemonList() {

    fetchPokemonList().then(list => {
        //console.log(list);
        renderPokemonList(list);
    });
};

function searchPokemonFromInput(event) {
    event.preventDefault();
    const pokemonId = event.target.value;

    pokemonInfoReset();
    //pikachu, bulbasaur, golduck
    fetchPokemonById(pokemonId).then(pokemon => {
  
        renderPokemon(pokemon);
        inputReset(event);

    });
};

function searchPokemonByName(event) {
    event.preventDefault();
    
    const pokemonName = event.target.textContent;
    //console.log(pokemonName);

    pokemonInfoReset();

    fetchPokemonById(pokemonName).then(pokemon => {
        renderPokemon(pokemon);
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
        <p>ІМ'Я: ${name}</p>
        <p>ЗРІСТ: ${height}</p>
        <p>ВАГА: ${weight}</p>
        <p>СИЛА: ${base_experience}</p>
        <p>ID: ${id}</p>
        `;

    refs.pokemonInfo.insertAdjacentHTML('afterbegin', markup);
};

function renderPokemonList(list) {
    //console.log(list.results);
    let namber = 0;
    const { results } = list;
    
    const markupList = results.map(({ name }) => {
        return `<li>
            <p>Name: <a href="#" class="pokemon-name">${name}</a></p>
            <p>Namber: ${namber += 1}</p>
        </li>`
    }).join('');

    refs.pokemonList.insertAdjacentHTML('afterbegin', markupList);
};
////////////////////function reset////////////
function inputReset (event) {
    event.target.value = ''
};

function pokemonInfoReset() {
    refs.pokemonInfo.innerHTML = '';
    refs.pokemonList.innerHTML = '';
};
