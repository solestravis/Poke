import Input from 'views/components/Input';
import React from 'react';
import { array } from 'prop-types';

const SearchInput = ({ pokeCatch, ...props }) => (
    pokeCatch.length ?
        <Input { ...props } />
        :
        null
);

SearchInput.propTypes = {
    pokeCatch: array
};

SearchInput.displayName = 'SearchInput';

export default SearchInput;
