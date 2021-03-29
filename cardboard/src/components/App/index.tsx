import React, {useState} from 'react'
import styled from 'styled-components';
import BrandedHeader from '../BrandedHeader';
import PostList from '../PostList';
import FullPost from '../FullPost';

const App = () => {
    const [isPostExpanded, setIsPostExpanded] = useState(false);
    const [selectedPost, setSelectedPost] = useState();
    const handleOpenFullPost = (post: any) => {
        setSelectedPost(post);
        console.log(post);
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
                <FullPost post = {selectedPost} handleClosePost = {handleCloseFullPost} /> }
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