import Alert from '../../components/Alert';
import List from '../../components/List';
import ListDetail from '../../components/ListDetail';
import React from 'react';
import { array, string } from 'prop-types';

export const ShowAlert = ({ error }) => (
    error && <Alert color="red">{ error }</Alert>
);

ShowAlert.propTypes = {
    error: string
};

export const ShowList = ({ pokeCatch }) => (
    pokeCatch.length ?
        <List>
            <h2>Caught Pokemons:</h2>
            {
                pokeCatch.map(poke => (
                    <ListDetail key={ poke.id }>
                        <img
                            alt={ poke.name }
                            src={ poke.url }
                        />{ poke.id } { poke.name }
                    </ListDetail>
                ))
            }
        </List>
        :
        <Alert color="lightgray">No pokemons caught yet!</Alert>
);

ShowList.propTypes = {
    pokeCatch: array
};

