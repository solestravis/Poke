/** This sagas is just an example. That's why it's not being tested. */
import { getPoke } from './services';
import { call, put } from 'redux-saga/effects';
import { pokemonNotFound, setPokemon } from './action';

export function* callPokeAPI ({ payload: pokeName }) {
    try {
        const data = yield call(getPoke, pokeName);
        yield put(setPokemon(data));
    } catch (e) {
        console.log(e);
        yield put(pokemonNotFound('Pokemon not found!'));
    }
}
