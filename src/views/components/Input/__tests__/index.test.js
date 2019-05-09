import Input from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Input />', () => {
    
    let input;

    beforeEach(() => {
        input = shallow(
            <Input />
        );
    });

    describe('render', () => {

        it('always renders Styled Input', () => {
            const styledInput = input.find('StyledInput');
            expect(styledInput).toHaveLength(1);
        });
        
        it('should be animated', () => {
            const animated = input.find('Animated');
            expect(animated).toHaveLength(1);
        });

    });

});
