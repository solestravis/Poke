import { SET_POKE } from 'core/types';
import { pokeReducer } from '../reducer';
import { catchSelector, errorSelector, resultSelector } from '../selector';

const error = '';
const pokeCatch = [];
const search = '';
const results = [];

const defaultState = {
    error,
    pokeCatch,
    search
};

describe('Poke selector defaults', () => {
    const newState = pokeReducer(defaultState, {});
    const store = { poke: newState };
    const catchResult = catchSelector(store);
    const errorResult = errorSelector(store);
    const searchResult = resultSelector(store);

    it('should return correct types', () => {
        expect(catchResult).toEqual(pokeCatch);
        expect(errorResult).toEqual(error);
        expect(searchResult).toEqual(results);
    });

});

// Mock array returned from API:
const mockPokeCatch = [
    { id: 25, name: 'pikachu', sprites: { front_default: '' } },
    { id: 1, name: 'bulbasaur', sprites: { front_default: '' } },
    { id: 133, name: 'eevee', sprites: { front_default: '' } }
];
// Mock array sent to React after selector:
const mockCatchPoke = [
    { id: 25, name: 'pikachu', url: '' },
    { id: 1, name: 'bulbasaur', url: '' },
    { id: 133, name: 'eevee', url: '' }
];
// Search:
const mockSearch = 'pik';
// Mock result from search:
const mockResult = [{ id: 25, name: 'pikachu', url: '' }];

const mockError = 'Error!';

const mockState = {
    error: mockError,
    pokeCatch: mockPokeCatch,
    search: mockSearch
};

describe('Poke selector data', () => {
    const newState = pokeReducer(mockState, {});
    const store = { poke: newState };
    const catchResult = catchSelector(store);
    const errorResult = errorSelector(store);
    const searchResult = resultSelector(store);

    it('should select the right pokemon data', () => {
        expect(catchResult).toEqual(mockCatchPoke);
    });
    
    it('should select the right search data', () => {
        expect(searchResult).toEqual(mockResult);
    });

    it('should return the same error', () => {
        expect(errorResult).toEqual(mockError);
    });

});
