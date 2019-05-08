/** This sagas is just an example. That's why it's not being tested. */
import { delay } from 'redux-saga';
import { getPoke } from './services';
import { call, put } from 'redux-saga/effects';
import { clearError, pokemonNotFound, setPokemon } from './action';

export function* callPokeAPI ({ payload: pokeName }) {
    try {
        if (pokeName.length) {
            const data = yield call(getPoke, pokeName);
            yield put(setPokemon(data));
        } else {
            throw new Error();
        }
    } catch (e) {
        yield put(pokemonNotFound('Pokemon not found!'));
        yield delay(3000);
        yield put(clearError());
    }
}
