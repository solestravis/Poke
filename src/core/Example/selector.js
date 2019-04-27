import { createSelector } from 'reselect';

const poke = store => store.example.pokeInfo;
const error = store => store.example.error;

export const pokeSelector = createSelector(
    poke,
    poke => {
        if (poke.name) {
            const { id, species: { name }, sprites: { front_default: url } } = poke;
            const payload = { id, name, url };
            return payload;
        }
        return {};
    }
);

export const errorSelector = createSelector(
    error,
    error => {
        if (error.message) {
            const errCode = error.message.slice(-3);
            return errCode;
        }
        return {};
    }
);
