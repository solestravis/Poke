import styled from 'styled-components';

export const StyledAlert = styled.div`
    background: ${ ({ color }) => color ? color : 'white' };
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    display: block;
    color: white;
`;

StyledAlert.displayName = 'StyledAlert';
