import React from 'react';
import styled from 'styled-components';

const ListHeader = () => {
    return (
        <ListHeaderWrapper>
            <p className = 'title'>New Posts</p>
        </ListHeaderWrapper>
        
    )
}

export default ListHeader;

const ListHeaderWrapper = styled.div`
width: 100%;

.title {
    font-size: 30px;
    color: white;
    
}
`;