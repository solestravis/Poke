import { CLEAR_POKE, ERR_MSG, LOAD_POKE, SET_POKE } from '../types';

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

export function clearPoke () {
    return {
        type: CLEAR_POKE
    };
}

