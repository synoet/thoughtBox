import React from 'react';
import styled from 'styled-components';

const Divider = () => {
    return (
        <Line></Line>
    )
}

const Line = styled.div`
height: 3px;
width: 100%;
background: #744EFF;
border-radius: 10px;
`;

export default Line;