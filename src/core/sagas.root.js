import { LOAD_POKE } from './types';
import { callPokeAPI } from './Example/sagas';
import { takeEvery } from 'redux-saga/effects';

function* rootSagas () {
    yield takeEvery(LOAD_POKE, callPokeAPI);
}

export default rootSagas;
