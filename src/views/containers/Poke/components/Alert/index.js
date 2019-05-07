import AlertComponent from 'views/components/Alert';
import React from 'react';
import { string } from 'prop-types';

const Alert = ({ error }) => (
    error ?
        <AlertComponent color="red">{ error }</AlertComponent>
        :
        null
);

Alert.propTypes = {
    error: string
};

export default Alert;
