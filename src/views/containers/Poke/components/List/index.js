import Alert from 'views/components/Alert';
import { Animated } from 'react-animated-css';
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
        <Animated
            animationIn="slideInRight"
            animationInDuration={ 400 }
        >
            <Alert color="lightgray">No pokemons caught yet!</Alert>
        </Animated>
);

List.propTypes = {
    pokeCatch: array
};

export default List;
