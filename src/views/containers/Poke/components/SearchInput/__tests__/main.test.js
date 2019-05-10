import React from 'react';
import SearchInput from '../main';
import { shallow } from 'enzyme';

const props = {
    pokeCatch: []
};
const POKES = [{ id: 0, name: 'foo', url: '#' }];

describe('<SearchInput />', () => {
    
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(
            <SearchInput { ...props } />
        );
    });

    describe('render', () => {

        it('does not render with empty array', () => {
            expect(wrapper.contains('Input')).toBeFalsy();
        });

        it('renders input when there are pokemons', () => {
            wrapper.setProps({
                ...props,
                pokeCatch: POKES
            });
            const input = wrapper.find('Input');
            expect(input).toHaveLength(1);
        });
    });

});
