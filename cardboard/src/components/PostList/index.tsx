import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import ListHeader from './ListHeader';
import Post from './Post';

const data = [
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    
]

const PostList = () => {
    return (
        <PostListWrapper>
            <ListHeader></ListHeader>
            {data.map(post => {
                return (
                    <div>
                        <Post title = {post.title} link = {post.link} distribution = {post.distribution}></Post>
                        <Divider/>
                    </div>
                )
            })}
        </PostListWrapper>
    )
}

export default PostList;
const PostListWrapper = styled.div`
min-width: 600px;
max-width: 900px;
`;