import { CLEAR_ERR, ERR_MSG, FIND_RESULTS, LOAD_POKE, SET_POKE } from '../types';

export function clearError () {
    return {
        type: CLEAR_ERR
    };
}

export function findResults (payload) {
    return {
        payload,
        type: FIND_RESULTS
    };
}

export function loadPokemonInfo (payload) {
    return {
        payload,
        type: LOAD_POKE
    };
}

export function setPokemon (payload) {
    return {
        payload,
        type: SET_POKE
    };
}

export function pokemonNotFound (payload) {
    return {
        payload,
        type: ERR_MSG
    };
}

