import React from 'react';
import styled from 'styled-components';
import PollBar from './PollBar';
import Emoji from './Emoji';
const Post = ({title, link, distribution}: {title: string, link: string, distribution: {good: number, okay: number, bad: number}}) => {
    return (
        <PostWrapper>
            <PostTitle>
                <h1> {title}</h1>
                <a href = {link}>{link}</a>
            </PostTitle>
            <ContentDivider></ContentDivider>
            <PostContent>
                <Poll><Emoji name = 'okay'/><PollBar votes = {100} totalVotes = {200} rank = {1}></PollBar></Poll>
                <Poll><Emoji name = 'good'/><PollBar votes = {50} totalVotes = {200} rank = {2}></PollBar></Poll>
                <Poll><Emoji name = 'bad'/><PollBar votes = {25} totalVotes = {200} rank = {3}></PollBar></Poll>
            </PostContent>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
background: #363742;
border-radius: 24.1763px;
max-width: 100%;
min-height: 250px;
`;

const Poll = styled.div`
vertical-align: middle;

`;

const ContentDivider = styled.div`
background: #FFFFFF;
opacity: 0.3;
border-radius: 6.89209px;
height: 2px;
`;

const PostTitle = styled.div`
padding: 1rem;

h1 {
    font-size: 22px;
    font-weight: 400;
    color: white;
    width: 80%;
}

a {
    text-decoration: none;
    color: white;
    opacity: .6;
}

a: hover {
    opacity: 1;
}

`;

const PostContent = styled.div`
padding: 1rem;

`;

export default Post;

