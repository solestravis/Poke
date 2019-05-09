import { Animated } from 'react-animated-css';
import React from 'react';
import { StyledListDetail } from './styled';
import { any } from 'prop-types';

const ListDetail = ({ children, ...props }) => (
    <Animated
        animationIn="slideInRight"
        animationInDuration={ 400 }
        animationOut="slideOutRight"
        isVisible={ true }
    >
        <StyledListDetail { ...props }>{ children }</StyledListDetail>
    </Animated>
);

ListDetail.propTypes = {
    children: any
};

ListDetail.displayName = 'ListDetail';

export default ListDetail;
