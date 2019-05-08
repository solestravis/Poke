import React from 'react';
import { StyledList } from './styled';
import { array } from 'prop-types';

const List = ({  children, ...props }) => (
    <StyledList { ...props }>{ children }</StyledList>
);

List.propTypes = {
    children: array
};

export default List;
