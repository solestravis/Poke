import Alert from './components/Alert';
import { Animated } from 'react-animated-css';
import { Container } from 'views/components/Container';
import Input from 'views/components/Input';
import { Layout } from 'views/components/Layout';
import Results from './components/Results';
import SearchInput from './components/SearchInput';
import React, { Component } from 'react';
import { array, func, string } from 'prop-types';

class Poke extends Component {

    static propTypes = {
        error: string,
        findResults: func,
        loadPokemonInfo: func,
        pokeCatch: array,
        results: array
    }

    _handleSubmit = event => {
        if (event.key === 'Enter') {
            const { loadPokemonInfo } = this.props;
            const name = event.target.value.toLowerCase();
            event.target.value = '';
            loadPokemonInfo(name);
        }
    }

    _handleChange = event => {
        const { findResults } = this.props;
        const search = event.target.value;
        findResults(search);
    }

    render () {
        const { error, pokeCatch, results } = this.props;
        return (
            <Layout>
                <Container>
                    <Input
                        placeholder="Pokemon Name"
                        type="text"
                        onKeyPress={ this._handleSubmit }
                    />
                    <Alert color="red" error={ error } />
                    <Results
                        pokeCatch={ pokeCatch }
                        results={ results }
                    />
                    <SearchInput
                        placeholder="Search Caught Pokemons"
                        pokeCatch={ pokeCatch }
                        type="text"
                        onChange={ this._handleChange }
                    />
                </Container>
            </Layout>
        );
    }
}

export default Poke;
