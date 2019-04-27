import axios from 'axios';

export const getPoke = pokeName => (
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokeName }`)
        .then(function ({ data }) {
            return data;
        })
);
