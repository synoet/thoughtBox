import React, {useState} from 'react'
import styled from 'styled-components';
import BrandedHeader from '../BrandedHeader';
import PostList from '../PostList';
import FullPost from '../FullPost';

const App = () => {
    const [isPostExpanded, setIsPostExpanded] = useState(false);
    const [selectedPost, setSelectedPost] = useState('');
    const handleOpenFullPost = (postId: string) => {
        setSelectedPost(postId);
        console.log(postId);
        setIsPostExpanded(true);
    }
    const handleCloseFullPost = () => {
        setIsPostExpanded(false);
    }
    return (
        <AppWrapper>
            <BrandedHeader />
            <Content>
                {!isPostExpanded &&
                <PostList switchToPost = {handleOpenFullPost} />
                }   
                {isPostExpanded && 
                <FullPost postId = {selectedPost} handleClosePost = {handleCloseFullPost} /> }
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
width: 700px;
`;