import AlertComponent from 'views/components/Alert';
import { Animated } from 'react-animated-css';
import React from 'react';
import { string } from 'prop-types';

const Alert = ({ error }) => (
    error.length ?
        <AlertComponent color="red">Pokemon not found!</AlertComponent>
        :
        null
);

Alert.propTypes = {
    error: string
};

export default Alert;
