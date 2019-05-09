import React from 'react';
import { StyledAlert } from './styled';
import { string } from 'prop-types';

const Alert = ({ children, ...props }) => (
    <StyledAlert { ...props }>{ children }</StyledAlert>
);

Alert.propTypes = {
    children: string
};

export default Alert;
