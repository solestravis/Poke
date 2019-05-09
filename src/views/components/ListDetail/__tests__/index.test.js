import ListDetail from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<ListDetail />', () => {
    
    const children = [];
    let listDetail;

    beforeEach(() => {
        listDetail = shallow(
            <ListDetail>{ children }</ListDetail>
        );
    });

    describe('render', () => {

        it('always renders StyledListDetail', () => {
            const styledListDetail = listDetail.find('StyledListDetail');
            expect(styledListDetail).toHaveLength(1);
        });

        it('should have children', () => {
            const styledListDetail = listDetail.find('StyledListDetail');
            expect(styledListDetail.prop('children')).toBe(children);
        });

        it('always renders animation', () => {
            const animated = listDetail.find('Animated');
            expect(animated).toHaveLength(1);
        });

    });

});
