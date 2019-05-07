import Alert from 'views/components/Alert';
import ListComponent from 'views/components/List';
import ListDetailComponent from 'views/components/ListDetail';
import React from 'react';
import { array } from 'prop-types';

const List = ({ pokeCatch }) => (
    pokeCatch.length ?
        <ListComponent>
            <h2>Caught Pokemons:</h2>
            {
                pokeCatch.map(poke => (
                    <ListDetailComponent key={ poke.id }>
                        <img
                            alt={ poke.name }
                            src={ poke.url }
                        />{ poke.id } { poke.name }
                    </ListDetailComponent>
                ))
            }
        </ListComponent>
        :
        <Alert color="lightgray">No pokemons caught yet!</Alert>
);

List.propTypes = {
    pokeCatch: array
};

export default List;
