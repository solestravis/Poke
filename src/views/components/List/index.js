import React from 'react';
import { StyledList } from './styled';
import { object } from 'prop-types';

const List = ({  children, ...props }) => (
    <StyledList { ...props }>{ children }</StyledList>
);

List.propTypes = {
    children: object
};

export default List;
