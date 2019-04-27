import { CLEAR_POKE, ERR_MSG, SET_POKE } from '../types';

const defaultState = () => ({
    error: {},
    pokeInfo: {}
});

export function exampleReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SET_POKE:
        return {
            ...state,
            error: payload.error,
            pokeInfo: payload.data
        };
    case ERR_MSG:
        return {
            ...state,
            error: payload
        };
    case CLEAR_POKE:
        return {
            ...state,
            pokeInfo: {}
        };
    default:
        return state;
    }
}
