import React from 'react';
import { StyledInput } from './styled';

const Input = ({  ...props }) => (
    <StyledInput { ...props } />
);

export default Input;
