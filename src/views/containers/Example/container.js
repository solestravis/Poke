import Example from './main';

import { connect } from 'react-redux';

import { clearPoke, loadPokemonInfo } from 'core/Example/action';
import { errorSelector, pokeSelector } from 'core/Example/selector';

function mapStateToProps (state) {
    return {
        error: errorSelector(state),
        pokeInfo: pokeSelector(state)
    };
}

const mapDispatchToProps = { clearPoke, loadPokemonInfo };
export default connect(mapStateToProps, mapDispatchToProps)(Example);
