import {
    CLEAR_ERR,
    ERR_MSG,
    FIND_RESULTS,
    LOAD_POKE,
    SET_POKE
} from 'core/types';
import { clearError, findResults, loadPokemonInfo, pokemonNotFound, setPokemon } from '../action';

describe('actions', () => {

    const payload = '';

    it('clearError', () => {
        const result = clearError();
        expect(result).toEqual({
            type: CLEAR_ERR
        });
    });

    it('findResults', () => {
        const result = findResults(payload);
        expect(result).toEqual({
            payload,
            type: FIND_RESULTS
        });
    });
    
    it('loadPokemonInfo', () => {
        const result = loadPokemonInfo(payload);
        expect(result).toEqual({
            payload,
            type: LOAD_POKE
        });
    });
    
    it('pokemonNotFound', () => {
        const result = pokemonNotFound(payload);
        expect(result).toEqual({
            payload,
            type: ERR_MSG
        });
    });
    
    it('setPokemon', () => {
        const result = setPokemon(payload);
        expect(result).toEqual({
            payload,
            type: SET_POKE
        });
    });
    
});
