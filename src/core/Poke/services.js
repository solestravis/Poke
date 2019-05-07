import axios from 'axios';

export const getPoke = pokeName => (
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokeName }`)
        .then(({ data }) => data)
        .catch(error => {
            throw error;
        })
);
