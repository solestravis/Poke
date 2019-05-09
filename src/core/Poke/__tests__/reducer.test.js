import { pokeReducer } from '../reducer';
import { CLEAR_ERR, ERR_MSG, FIND_RESULTS, SET_POKE } from 'core/types';

const defaultState = () => ({
    error: '',
    pokeCatch: [],
    search: ''
});

describe('Poke reducer', () => {

    it('should return default state', () => {
        const result = pokeReducer(undefined, {});
        const record = defaultState();
        expect(result).toEqual(record);
    });

    it('should return empty error', () => {
        const dispatchedAction = { type: CLEAR_ERR };
        const result = pokeReducer(defaultState(), dispatchedAction);
        const record = { ...defaultState(), error: '' };
        expect(result).toEqual(record);
    });
    
    it('should return error message', () => {
        const error = 'error message';
        const dispatchedAction = { payload: error, type: ERR_MSG };
        const result = pokeReducer(defaultState(), dispatchedAction);
        const record = { ...defaultState(), error };
        expect(result).toEqual(record);
    });
    
    it('should return search term', () => {
        const search = 'search';
        const dispatchedAction = { payload: search, type: FIND_RESULTS };
        const result = pokeReducer(defaultState(), dispatchedAction);
        const record = { ...defaultState(), search };
        expect(result).toEqual(record);
    });
    
    it('should add Pokemon to array if it does not already exist', () => {
        const payload = { name: 'pikachu' };
        const initPokeCatch = [{ name: 'ditto' }];
        const finalPokeCatch = [{ name: 'ditto' }, payload];

        const mockState = { ...defaultState(), pokeCatch: initPokeCatch };

        const dispatchedAction = { payload, type: SET_POKE };
        const result = pokeReducer(mockState, dispatchedAction);
        const record = { ...mockState, pokeCatch: finalPokeCatch };
        expect(result).toEqual(record);
    });
    
    it('should not add Pokemon to array if it already exists and return an error', () => {
        const payload = { name: 'pikachu' };
        const pokeCatch = [payload];
        const error = 'Pokemon already exists';

        const mockState = { ...defaultState(), pokeCatch };

        const dispatchedAction = { payload, type: SET_POKE };
        const result = pokeReducer(mockState, dispatchedAction);
        const record = { ...mockState, error };
        expect(result).toEqual(record);
    });

});
