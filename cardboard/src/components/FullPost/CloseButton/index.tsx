import React from 'react';
import styled from 'styled-components';
const ExpandButton = ({callback}: {callback: () => void}) => {
    return (
        <Button onClick = {callback}>Close</Button>

    )
}

export default ExpandButton;

const Button = styled.div`
background: #744EFF;
border-radius: 0px 24px 0px 0px;
display: flex;
align-items: center;
justify-content: center;
color: white;
position: absolute;
top: 0;
right: 0;
width: 130px;
height: 50px;
cursor: pointer;
:hover {
    opacity: .8;
}
`;