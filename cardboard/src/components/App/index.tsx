import React from 'react'
import styled from 'styled-components';
import BrandedHeader from '../BrandedHeader';
import TagList from '../TagList';
import PostList from '../PostList';

const App = () => {
    return (
        <AppWrapper>
            <BrandedHeader />
            <Content>
                <TagList />
                <PostList />
            </Content>
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

const Content = styled.div`
width: 650px;
`;