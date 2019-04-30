import { ERR_MSG, SET_POKE } from '../types';

const defaultState = () => ({
    error: '',
    pokeCatch: []
});

export function pokeReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SET_POKE:
        return state.pokeCatch.find(poke => poke.name === payload.name) ?
            {
                ...state,
                error: 'Pokemon already exists'
            }
            :
            {
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
