import Input from '../Input';
import React from 'react';
import { StyledInputForm } from './styled';
import { string } from 'prop-types';

const InputForm = ({ labelText, name, ...props }) => (
    <StyledInputForm
        name={ name }
        { ...props }
    >
        <label htmlFor={ name }>{ labelText } </label>
        <Input
            name={ name }
            type="text"
        />
        <button type="submit">Search</button>
    </StyledInputForm>
);

InputForm.propTypes = {
    labelText: string,
    name: string
};

export default InputForm;
