import { Container } from '../../components/Container';
import Input from '../../components/Input';
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
                    <form name="pokemonForm" onSubmit={ this._handleSubmit }>
                        <label htmlFor="pokeName">Pokemon Name </label>
                        <Input
                            name="pokeName"
                            type="text"
                        />
                        <button type="submit">Search</button>
                    </form>
                    {
                        error === '404' &&
                        <p>Pokemon not found!</p>
                    }
                    {
                        pokeInfo.name &&
                        <div>
                            <Result>
                                <img src={ pokeInfo.url } />
                                { pokeInfo.name }
                            </Result>
                            <button onClick={ this._handleClick }>CATCH!</button>
                        </div>
                    }
                    {
                        pokeList.length ?
                            <List>
                                { pokeList.map(poke => (
                                    <ListDetail key={ poke.name }>
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
