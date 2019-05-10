import Alert from '../main';

import React from 'react';
import { shallow } from 'enzyme';

const props = {
    error: ''
};
const ERROR = 'foo';

describe('<Alert />', () => {
    
    let alert;
    
    beforeEach(() => {
        alert = shallow(
            <Alert { ...props } />
        );
    });

    describe('render', () => {
        it('renders an alert component when there is an error', () => {
            alert.setProps({
                ...props,
                error: ERROR
            });
            const alertComponent = alert.find('Alert');
            expect(alertComponent).toHaveLength(1);
        });
    });

    it('does not render with empty error', () => {
        expect(alert.contains('Alert')).toBeFalsy();
    });

});
