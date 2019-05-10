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

        it('should run _handleSubmit when key is pressed', () => {
            wrapper.setProps({
                ...props
            });
            const mockHandleSubmit = jest.spyOn(wrapper.instance(), '_handleSubmit');
            const mockEvent = {
                key: 'foo',
                target: {
                    value: 'test'
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleSubmit(mockEvent);
            expect(mockHandleSubmit).toHaveBeenCalled();
        });

        it('should not enter _handleSubmit if enter key is not pressed', () => {
            wrapper.setProps({
                ...props
            });
            const mockHandleSubmit = jest.spyOn(wrapper.instance(), '_handleSubmit');
            const value = 'TEST';
            const mockEvent = {
                key: 'foo',
                target: {
                    value
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleSubmit(mockEvent);
            expect(mockHandleSubmit).toHaveBeenCalled();
            // Since if statements did not run:
            expect(mockEvent.target.value).toEqual(value);
        });

        it('should enter _handleSubmit if enter key is pressed', () => {
            wrapper.setProps({
                ...props
            });
            const mockHandleSubmit = jest.spyOn(wrapper.instance(), '_handleSubmit');
            const emptyValue = '';
            const mockEvent = {
                key: 'Enter',
                target: {
                    value: 'foo'
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleSubmit(mockEvent);
            expect(mockHandleSubmit).toHaveBeenCalled();
            expect(mockEvent.target.value).toEqual(emptyValue);
        });

        it('should run _handleChange ', () => {
            wrapper.setProps({
                ...props
            });
            const mockHandleChange = jest.spyOn(wrapper.instance(), '_handleChange');
            const mockEvent = {
                target: {
                    value: 'test'
                }
            };
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleChange(mockEvent);
            expect(mockHandleChange).toHaveBeenCalled();
        });

    });
});
