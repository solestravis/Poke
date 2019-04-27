import { Container } from '../../components/Container';
import InputForm from '../../components/InputForm';
import { Layout } from '../../components/Layout';
import List from '../../components/List';
import ListDetail from '../../components/ListDetail';
import Result from '../../components/Result';

// Cimport logo from '../../../assets/valhalla-logo.png';
import PropTypes, { func, object, string } from 'prop-types';
import React, { Component } from 'react';

class Example extends Component {

    static propTypes = {
        clearPoke: func,
        error: PropTypes.oneOfType([string, object]),
        loadPokemonInfo: func,
        pokeInfo: PropTypes.oneOfType([string, object])
    }

    constructor (props) {
        super(props);
        this.state = {
            pokeList: []
        };
    }

    _handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const { loadPokemonInfo } = this.props;
        const name = form.pokeName.value.toLowerCase();
        form.reset();
        loadPokemonInfo(name);
    }

    _handleClick = () => {
        const { clearPoke, pokeInfo } = this.props;
        this.setState(({ pokeList }) => {
            const pokeNotFound = pokeList.findIndex(poke => poke.id === pokeInfo.id) === -1;
            if (pokeNotFound) {
                return {
                    pokeList: [...pokeList, pokeInfo]
                };
            }
            return pokeList;
        });
        clearPoke();
    }

    render () {
        const { error, pokeInfo } = this.props;
        const { pokeList } = this.state;
        return (
            <Layout>
                <Container>
                    <InputForm
                        labelText="Pokemon Name"
                        name="pokeName"
                        onSubmit={ this._handleSubmit }
                    />
                    {
                        error === '404' &&
                        <p>Pokemon not found!</p>
                        
                    }
                    {
                        pokeInfo.name &&
                        <List>
                            <ListDetail>
                                <img src={ pokeInfo.url } />
                                { pokeInfo.name }
                                <button onClick={ this._handleClick }>CATCH!</button>
                            </ListDetail>
                        </List>
                    }
                    {
                        pokeList.length ?
                            <List>
                                <h2>Caught Pokemons:</h2>
                                { pokeList.map(poke => (
                                    <ListDetail key={ poke.id }>
                                        <img
                                            alt={ poke.name }
                                            src={ poke.url }
                                        />{ poke.id } { poke.name }
                                    </ListDetail>
                                )) }
                            </List>
                            :
                            !pokeList.length && <p>No pokemons captured yet</p>
                    }
                </Container>
            </Layout>
        );
    }

}

export default Example;
