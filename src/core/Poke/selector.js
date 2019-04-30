import { createSelector } from 'reselect';

const error = ({ poke }) => poke.error;
const catchPoke = ({ poke }) => poke.pokeCatch;

export const errorSelector = createSelector(
    error,
    error => error
        
);

export const catchSelector = createSelector(
    catchPoke,
    catchPoke => catchPoke ?
        catchPoke.map(
            ({ id, name, sprites: { front_default: url } }) =>
                ({ id, name, url }))
        :
        []
);
