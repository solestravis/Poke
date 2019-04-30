import { Container } from '../../components/Container';
import Input from '../../components/Input';
import { Layout } from '../../components/Layout';
import React, { Component } from 'react';
import { ShowAlert, ShowList } from './components';
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
                    <ShowAlert error={ error } />
                    <ShowList pokeCatch={ pokeCatch } />
                </Container>
            </Layout>
        );
    }

}

export default Poke;
