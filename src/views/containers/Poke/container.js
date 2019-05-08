import Poke from './main';

import { connect } from 'react-redux';

import { catchSelector, errorSelector, resultSelector } from 'core/Poke/selector';
import { clearError, findResults, loadPokemonInfo } from 'core/Poke/action';

function mapStateToProps (state) {
    return {
        error: errorSelector(state),
        pokeCatch: catchSelector(state),
        results: resultSelector(state)
    };
}

const mapDispatchToProps = { clearError, findResults, loadPokemonInfo };
export default connect(mapStateToProps, mapDispatchToProps)(Poke);
