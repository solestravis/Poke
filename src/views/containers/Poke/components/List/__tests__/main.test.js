import List from '../main';

import React from 'react';
import { shallow } from 'enzyme';

const props = {
    pokeCatch: []
};
const POKES = [{ id: 1, name: 'foo', url: '#' }];

describe('<List />', () => {

    let list;

    beforeEach(() => {
        list = shallow(
            <List { ...props } />
        );
    });

    describe('render', () => {
        it('renders the list when there are pokemons', () => {
            list.setProps({
                ...props,
                pokeCatch: POKES
            });
            const listComponent = list.find('List');
            expect(listComponent).toHaveLength(1);
        });
    });

    it('renders an animated alert with empty array', () => {
        const animated = list.find('Animated');
        const alert = list.find('Alert');
        expect(animated).toHaveLength(1);
        expect(alert).toHaveLength(1);
    });

});
