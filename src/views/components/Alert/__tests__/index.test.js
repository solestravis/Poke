import Alert from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Alert />', () => {
    
    const children = 'children';
    let alert;

    beforeEach(() => {
        alert = shallow(
            <Alert>{ children }</Alert>
        );
    });

    describe('render', () => {

        it('always renders Styled Alert', () => {
            const styledAlert = alert.find('StyledAlert');
            expect(styledAlert).toHaveLength(1);
        });

        it('should have children', () => {
            expect(alert.prop('children')).toBe(children);
        });

    });

});
