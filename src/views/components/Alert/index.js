import React from 'react';
import { StyledAlert } from './styled';
import { string } from 'prop-types';

const Alert = ({ children, error, ...props }) => (
    <StyledAlert { ...props }>{ children }</StyledAlert>
);

Alert.propTypes = {
    children: string,
    error: string
};

export default Alert;
