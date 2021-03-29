import React from 'react';
import styled from 'styled-components';
const Tag = ({name, isSelected, onClick}: {name: string, isSelected: boolean, onClick: any}) => {
    return (
        <StyledTag onClick = {() => onClick(name)}>
                <p className = {isSelected ? 'active' : ''}>{name}</p>
        </StyledTag>
    )
}

export default Tag;

const StyledTag = styled.div`
p {
    background: #2F2D38;
    border-radius: 30.6166px;
    height: 100%;
    margin-right: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-right: 15px;
    padding-left: 15px;
    font-size: 16px;
    color: white;
    opacity: 0.7;

}

p: hover {
    opacity: 1;
    cursor: pointer;
}

.active {
    background: #744EFF;
    opacity: 1;

}



display: inline-block;

`;
