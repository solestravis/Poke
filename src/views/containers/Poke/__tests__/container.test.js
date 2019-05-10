import Poke from '../container';
import React from 'react';
import { Record } from 'immutable';
import configureStore from 'redux-mock-store';
import { pokeReducer } from 'core/Poke/reducer';
import saga from 'redux-saga';
import { shallow } from 'enzyme';
import {
    CLEAR_ERR,
    FIND_RESULTS,
    LOAD_POKE
} from 'core/types';
import { catchSelector, errorSelector, resultSelector } from 'core/Poke/selector';
import { clearError, findResults, loadPokemonInfo } from 'core/Poke/action';

// SELECTORS:
jest.mock('core/Poke/selector', () => ({
    catchSelector: jest.fn(),
    errorSelector: jest.fn(),
    resultSelector: jest.fn()
}));

// ACTIONS:
jest.mock('core/Poke/action', () => ({
    clearError: jest.fn(),
    findResults: jest.fn(),
    loadPokemonInfo: jest.fn()
}));

const payload = {};

const ACTION_ERRCLR = {
    payload,
    type: CLEAR_ERR
};

const ACTION_RES = {
    payload,
    type: FIND_RESULTS
};

const ACTION_LOAD = {
    payload,
    type: LOAD_POKE
};

clearError.mockImplementation(() => ACTION_ERRCLR);
findResults.mockImplementation(() => ACTION_RES);
loadPokemonInfo.mockImplementation(() => ACTION_LOAD);

const error = '';
const pokeCatch = [];
const search = '';

const defaultState = new Record({
    error,
    pokeCatch,
    search
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
            expect(clearError()).toBe(ACTION_ERRCLR);
        });

        it('should have findResults action dispatcher', () => {
            expect(wrapper.prop('findResults')).toBeInstanceOf(Function);
            expect(findResults()).toBe(ACTION_RES);
        });
        
        it('should have loadPokemonInfo action dispatcher', () => {
            expect(wrapper.prop('loadPokemonInfo')).toBeInstanceOf(Function);
            expect(loadPokemonInfo()).toBe(ACTION_LOAD);
        });
    });

    describe('mapStateToProps', () => {
        it('catchSelector should set message as prop', () => {
            expect(catchSelector).toHaveBeenCalledTimes(1);
            expect(catchSelector).toHaveBeenCalledWith(store);
        });
        
        it('errorSelector should set message as prop', () => {
            expect(errorSelector).toHaveBeenCalledTimes(1);
            expect(errorSelector).toHaveBeenCalledWith(store);
        });

        it('resultSelector should set message as prop', () => {
            expect(resultSelector).toHaveBeenCalledTimes(1);
            expect(resultSelector).toHaveBeenCalledWith(store);
        });

    });

});
