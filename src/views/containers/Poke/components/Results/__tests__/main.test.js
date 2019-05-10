import React from 'react';
import Results from '../main';
import { shallow } from 'enzyme';

const pokeCatch = [{ id: 0, name: 'foo', url: '#' }];

const props = {
    pokeCatch,
    results: []
};
const RESULTS = [{ id: 1, name: 'foo', url: '#' }];

describe('<Results />', () => {
    
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(
            <Results { ...props } />
        );
    });

    describe('render', () => {

        it('renders pokeCatch list when there are no results', () => {
            const list = wrapper.find('List');
            expect(list.prop('pokeCatch')).toEqual(pokeCatch);
        });

        it('renders results list when there are results', () => {
            wrapper.setProps({
                ...props,
                results: RESULTS
            });
            const list = wrapper.find('List');
            expect(list.prop('pokeCatch')).toEqual(RESULTS);
        });

    });

});
