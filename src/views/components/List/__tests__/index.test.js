import List from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<List />', () => {
    
    const children = [];
    let list;

    beforeEach(() => {
        list = shallow(
            <List>{ children }</List>
        );
    });

    describe('render', () => {

        it('always renders StyledList', () => {
            const styledList = list.find('StyledList');
            expect(styledList).toHaveLength(1);
        });

        it('should have children', () => {
            expect(list.prop('children')).toBe(children);
        });

    });

});
