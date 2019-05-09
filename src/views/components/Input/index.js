import { Animated } from 'react-animated-css';
import React from 'react';
import { StyledInput } from './styled';

const Input = ({  ...props }) => (
    <Animated
        animationIn="slideInLeft"
        animationInDuration={ 400 }
    >
        <StyledInput { ...props } />
    </Animated>
);

export default Input;
