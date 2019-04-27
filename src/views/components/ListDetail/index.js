import React from 'react';
import { StyledListDetail } from './styled';
import { array } from 'prop-types';

const ListDetail = ({ children, ...props }) => (
    <StyledListDetail { ...props }>{ children }</StyledListDetail>
);

ListDetail.propTypes = {
    children: array
};

export default ListDetail;
