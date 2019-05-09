import { CLEAR_ERR } from 'core/types';
import Poke from '../container';
import React from 'react';
import { Record } from 'immutable';
import configureStore from 'redux-mock-store';
import { pokeReducer } from 'core/Poke/reducer';
import saga from 'redux-saga';
import { shallow } from 'enzyme';
import { catchSelector, errorSelector, resultSelector } from 'core/Poke/selector';
import { clearError, findResults, loadPokemonInfo, pokemonNotFound, setPokemon } from 'core/Poke/action';

// SELECTORS:
jest.mock('core/Poke/selector', () => ({
    catchSelector: jest.fn()
}));

// ACTIONS:
jest.mock('core/Poke/action', () => ({
    clearError: jest.fn(),
    findResults: jest.fn(),
    loadPokemonInfo: jest.fn(),
    pokemonNotFound: jest.fn(),
    setPokemon: jest.fn()
}));

const payload = {};

const ACTION = {
    payload,
    type: CLEAR_ERR
};

clearError.mockImplementation(() => ACTION);
findResults.mockImplementation(() => ACTION);
loadPokemonInfo.mockImplementation(() => ACTION);
pokemonNotFound.mockImplementation(() => ACTION);
setPokemon.mockImplementation(() => ACTION);

const error = '';
const catchPoke = [];
const results = [];

const defaultState = new Record({
    catchPoke,
    error,
    results
});

describe('Poke container', () => {
    
    const middlewares = [saga];
    const mockStore = configureStore(middlewares);

    let newState;
    let store;
    let storeMock;
    let wrapper;

    beforeEach(() => {
        newState = pokeReducer(new defaultState(), {});
        store = { poke: newState };
        storeMock = mockStore(store);
        wrapper = shallow(<Poke store={ storeMock } />);
    });

    afterEach(() => {
        catchSelector.mockClear();
        errorSelector.mockClear();
        resultSelector.mockClear();
    });

    describe('mapDispatchToProps', () => {
        it('should have clearError action dispatcher', () => {
            expect(wrapper.prop('clearError')).toBeInstanceOf(Function);
            expect(clearError()).toBe(ACTION);
        });

        it('should have findResults action dispatcher', () => {
            expect(wrapper.prop('findResults')).toBeInstanceOf(Function);
            expect(findResults()).toBe(ACTION);
        });
        
        it('should have loadPokemonInfo action dispatcher', () => {
            expect(wrapper.prop('loadPokemonInfo')).toBeInstanceOf(Function);
            expect(loadPokemonInfo()).toBe(ACTION);
        });
    });

    describe('mapStateToProps', () => {
        it('catchSelector should set message as prop', () => {
            expect(catchSelector).toHaveBeenCalledTimes(1);
            expect(catchSelector).toHaveBeenCalledWith(store);
            expect(wrapper.prop('catchPoke')).toEqual(catchPoke);
        });
        
        it('errorSelector should set message as prop', () => {
            expect(errorSelector).toHaveBeenCalledTimes(1);
            expect(errorSelector).toHaveBeenCalledWith(store);
            expect(wrapper.prop('error')).toEqual(error);
        });

        it('resultSelector should set message as prop', () => {
            expect(resultSelector).toHaveBeenCalledTimes(1);
            expect(resultSelector).toHaveBeenCalledWith(store);
            expect(wrapper.prop('results')).toEqual(results);
        });

    });

});
