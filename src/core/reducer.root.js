import { combineReducers } from 'redux';
import { pokeReducer } from './Poke/reducer';
import { routerReducer } from 'react-router-redux';

export default function rootReducer () {
    return combineReducers({
        poke: pokeReducer,
        router: routerReducer
    });
}
