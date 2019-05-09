import Alert from 'views/components/Alert';
import { Animated } from 'react-animated-css';
import ListComponent from 'views/components/List';
import ListDetailComponent from 'views/components/ListDetail';
import { array } from 'prop-types';
import React, { Fragment } from 'react';

const List = ({ pokeCatch }) => (
    pokeCatch.length ?
        <ListComponent>
            <h2>Caught Pokemons:</h2>
            {
                pokeCatch.map(poke => (
                    <ListDetailComponent key={ poke.id }>
                        <Fragment>
                            <img
                                alt={ poke.name }
                                src={ poke.url }
                            />{ poke.id } { poke.name }
                        </Fragment>
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
