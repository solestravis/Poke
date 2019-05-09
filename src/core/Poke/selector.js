import { createSelector } from 'reselect';

const error = ({ poke }) => poke.error;
const search = ({ poke }) => poke.search;
const catchPoke = ({ poke }) => poke.pokeCatch;

export const errorSelector = createSelector(
    error,
    error => error
        
);

export const catchSelector = createSelector(
    catchPoke,
    catchPoke =>
        catchPoke.map(
            ({ id, name, sprites: { front_default: url } }) =>
                ({ id, name, url }))
);

export const resultSelector = createSelector(
    // I'll grab the already destructured array from catchSelector:
    catchSelector,
    search,
    // I rename it to catchPoke here but it's the same array:
    (catchPoke, search) => search ?
        catchPoke.filter(poke => poke.name.startsWith(search))
        :
        []
);
