import List from '../main';

import React from 'react';
import { shallow } from 'enzyme';

const props = {
    pokeCatch: []
};
const POKES = [{ id: 1, name: 'foo', url: '#' }];

describe('<List />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <List { ...props } />
        );
    });

    describe('render', () => {
        it('renders the list when there are pokemons', () => {
            wrapper.setProps({
                ...props,
                pokeCatch: POKES
            });
            const listComponent = wrapper.find('List');
            expect(listComponent).toHaveLength(1);
        });
    });

    it('renders an animated alert with empty array', () => {
        const animated = wrapper.find('Animated');
        const alert = wrapper.find('Alert');
        expect(animated).toHaveLength(1);
        expect(alert).toHaveLength(1);
    });

});
