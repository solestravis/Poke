import List from '../List';
import React from 'react';
import { array } from 'prop-types';

const Results = ({ results, pokeCatch }) => (
    results.length ?
        <List pokeCatch={ results }  />
        :
        <List pokeCatch={ pokeCatch } />
);

Results.propTypes = {
    pokeCatch: array,
    results: array
};

export default Results;
