import { CLEAR_ERR, ERR_MSG, FIND_RESULTS, SET_POKE } from '../types';

const defaultState = () => ({
    error: '',
    pokeCatch: [],
    search: ''
});

export function pokeReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case CLEAR_ERR:
        return {
            ...state,
            error: ''
        };
    case FIND_RESULTS:
        return {
            ...state,
            search: payload
        };
    case SET_POKE:
        return state.pokeCatch.find(poke => poke.name === payload.name) ?
            {
                ...state,
                error: 'Pokemon already exists'
            }
            :
            {
                ...state,
                error: '',
                pokeCatch: [...state.pokeCatch, payload]
            };
    case ERR_MSG:
        return {
            ...state,
            error: payload
        };
    default:
        return state;
    }
}
