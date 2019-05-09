import { callPokeAPI } from '../sagas';
import { delay } from 'redux-saga';
import { getPoke } from '../services';
import { call, put } from 'redux-saga/effects';
import { clearError, pokemonNotFound, setPokemon } from '../action';

// Mock sagas to be able to test for delay:
jest.mock('redux-saga');

describe('Sagas', () => {

    it('should set Pokemons if name is valid', () => {
        const payload = 'pokeName';
        const action = { payload, type: '' };
        const gen = callPokeAPI(action);
        const pokeData = {};
        expect(gen.next(true).value).toEqual(call(getPoke, action.payload));
        expect(gen.next(pokeData).value).toEqual(put(setPokemon(pokeData)));
        expect(gen.next().done).toBeTruthy();
    });
    
    it('should throw error if name is invalid', () => {
        const payload = '';
        const action = { payload, type: '' };
        const gen = callPokeAPI(action);

        expect(gen.next(false).value).toEqual(put(pokemonNotFound('Pokemon not found!')));
        expect(gen.next().value).toEqual(delay(3000));
        expect(gen.next().value).toEqual(put(clearError()));
        expect(gen.next().done).toBeTruthy();
    });

});
