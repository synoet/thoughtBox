import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Submit from '../../Submit';
const CommentsList = ({comments}: {comments: any}) => {
    return (
        <ListWrapper>
            <h1> Comments</h1>
            <Submit callback = {() => {}}></Submit>
            {comments.map((comment: any) => {
                return(
                    <Comment data = {comment}></Comment>
                )
            })}

        </ListWrapper>
    )
}

const ListWrapper = styled.div`
h1 {
    color: white;
    font-size: 24px;
    font-weight: 400;
}

`;
export default CommentsList;