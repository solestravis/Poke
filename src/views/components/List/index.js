import React from 'react';
import { StyledList } from './styled';
import PropTypes, { array, object } from 'prop-types';

const List = ({  children, ...props }) => (
    <StyledList { ...props }>{ children }</StyledList>
);

List.propTypes = {
    children: PropTypes.oneOfType([object, array])
};

export default List;
