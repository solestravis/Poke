import { Animated } from 'react-animated-css';
import React from 'react';
import { StyledListDetail } from './styled';
import { array } from 'prop-types';

const ListDetail = ({ children, ...props }) => (
    <Animated
        animationIn="slideInRight"
        animationInDuration={ 400 }
        animationOut="slideOutRight"
        isVisible={ children }
    >
        <StyledListDetail { ...props }>{ children }</StyledListDetail>
    </Animated>
);

ListDetail.propTypes = {
    children: array
};

export default ListDetail;
