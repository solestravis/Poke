import Poke from './main';

import { connect } from 'react-redux';

import { loadPokemonInfo } from 'core/Poke/action';
import { catchSelector, errorSelector } from 'core/Poke/selector';

function mapStateToProps (state) {
    return {
        error: errorSelector(state),
        pokeCatch: catchSelector(state)
    };
}

const mapDispatchToProps = { loadPokemonInfo };
export default connect(mapStateToProps, mapDispatchToProps)(Poke);
