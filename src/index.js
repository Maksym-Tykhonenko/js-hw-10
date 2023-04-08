import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchPokemonById } from './fetchpokemon';

const DEBOUNCE_DELAY = 1500;

const refs = {
    input: document.querySelector('#search-box'),
    pokemonList: document.querySelector('.pokemon-list'),
    pokemonInfo: document.querySelector('.pokemon-info'),
};

refs.input.addEventListener('input', debounce(searchPokemon, DEBOUNCE_DELAY));

function searchPokemon(event) {
    event.preventDefault();
    const pokemonId = event.target.value;

    pokemonInfoReset();
    //pikachu, bulbasaur, golduck
    fetchPokemonById(pokemonId).then(pokemon => {
  
        renderPokemon(pokemon);
        inputReset(event);

    });
};

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

function inputReset (event) {
    event.target.value = ''
};

function pokemonInfoReset() {
    refs.pokemonInfo.innerHTML = '';
};
