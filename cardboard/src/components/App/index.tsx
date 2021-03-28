import React from 'react'
import styled from 'styled-components';
import BrandedHeader from '../BrandedHeader';
import TagList from '../TagList';

const App = () => {
    return (
        <AppWrapper>
            <BrandedHeader></BrandedHeader>
            <TagList></TagList>

        </AppWrapper>
    )
}

export default App;

const AppWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
