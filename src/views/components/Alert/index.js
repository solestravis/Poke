import { Animated } from 'react-animated-css';
import React from 'react';
import { StyledAlert } from './styled';
import { string } from 'prop-types';

const Alert = ({ children, error, ...props }) => (
    <Animated
        animationIn="slideInLeft"
        animationInDuration={ 400 }
        animationOut="fadeOut"
        isVisible={ error || children }
    >
        <StyledAlert { ...props }>{ children }</StyledAlert>
    </Animated>
);

Alert.propTypes = {
    children: string,
    error: string
};

export default Alert;
