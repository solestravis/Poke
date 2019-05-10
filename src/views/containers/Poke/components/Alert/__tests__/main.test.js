import Alert from '../main';

import React from 'react';
import { shallow } from 'enzyme';

const props = {
    error: ''
};
const ERROR = 'foo';

describe('<Alert />', () => {
    
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(
            <Alert { ...props } />
        );
    });

    describe('render', () => {
        it('renders an alert component when there is an error', () => {
            wrapper.setProps({
                ...props,
                error: ERROR
            });
            const alertComponent = wrapper.find('Alert');
            expect(alertComponent).toHaveLength(1);
        });
    });

    it('does not render with empty error', () => {
        expect(wrapper.contains('Alert')).toBeFalsy();
    });

});
