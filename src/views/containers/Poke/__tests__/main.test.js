import Poke from '../main';

import React from 'react';
import { shallow } from 'enzyme';

const MESSAGE = 'message';

const props = {
    findResults: jest.fn(),
    loadPokemonInfo: jest.fn()
};

describe('<Poke />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Poke />
        );
    });
    
    describe('render', () => {
        
        it('always renders Layout', () => {
            const layout = wrapper.find('Layout');
            expect(layout).toHaveLength(1);
        });

        it('always renders Container', () => {
            const container = wrapper.find('Container');
            expect(container).toHaveLength(1);
        });

        it('always renders Input', () => {
            const input = wrapper.find('Input');
            expect(input).toHaveLength(1);
        });
        
        it('always renders Results', () => {
            const results = wrapper.find('Results');
            expect(results).toHaveLength(1);
        });
        
        it('always renders Alert', () => {
            const results = wrapper.find('Alert');
            expect(results).toHaveLength(1);
        });

        it('always renders SearchInput', () => {
            const results = wrapper.find('SearchInput');
            expect(results).toHaveLength(1);
        });

        it('should run _handleSubmit', () => {
            wrapper.setProps({
                ...props
            });
            const spy = jest.spyOn(wrapper.instance(), '_handleSubmit');
            const mockEvent = {
                key: 'Enter',
                target: {
                    value: 'test'
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleSubmit(mockEvent);
            expect(spy).toHaveBeenCalled();
        });

        it('should run _handleChange', () => {
            wrapper.setProps({
                ...props
            });
            const spy = jest.spyOn(wrapper.instance(), '_handleChange');
            const mockEvent = {
                target: {
                    value: 'test'
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleChange(mockEvent);
            expect(spy).toHaveBeenCalled();
        });

    });
});
