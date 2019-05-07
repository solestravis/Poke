import Alert from './components/Alert';
import { Container } from 'views/components/Container';
import Input from 'views/components/Input';
import { Layout } from 'views/components/Layout';
import List from './components/List';
import React, { Component } from 'react';
import { array, func, string } from 'prop-types';

class Poke extends Component {

    static propTypes = {
        error: string,
        loadPokemonInfo: func,
        pokeCatch: array
    }

    _handleSubmit = event => {
        if (event.key === 'Enter') {
            const { loadPokemonInfo } = this.props;
            const name = event.target.value.toLowerCase();
            event.target.value = '';
            loadPokemonInfo(name);
        }
    }

    render () {
        const { error, pokeCatch } = this.props;
        return (
            <Layout>
                <Container>
                    <Input
                        type="text"
                        onKeyPress={ this._handleSubmit }
                    />
                    <Alert color="red" error={ error } />
                    <List pokeCatch={ pokeCatch } />
                </Container>
            </Layout>
        );
    }
}

export default Poke;
