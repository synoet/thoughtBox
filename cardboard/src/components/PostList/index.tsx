import React, {useState, useEffect} from 'react';
import styled, { keyframes} from 'styled-components';
import Divider from './Divider';
import ListHeader from './ListHeader';
import Post from './Post';
import TagList from './TagList';
import Submit from '../Submit';
// import {ReactComponent as Logo} from './logo.svg';

export type IPost = []

const PostList = ({switchToPost}: any) => {
    const [categories, setCategories] = useState(['all']);
    const [posts, setPosts] = useState<IPost>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [increment, incrementer] = useState(0);
    useEffect(() => {
        fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            setPosts(res);
        }).then(() => {setTimeout(() => { setIsLoading(false) }, 1000)})
    }, [increment])

    const updateCategories = (category: string) => {
        console.log('hi')
        let tempCategories = categories;
        if(tempCategories.indexOf(category) > -1){
            tempCategories.splice(tempCategories.indexOf(category), 1);
            setCategories(tempCategories);
        }else{
            tempCategories.push(category);
            console.log(tempCategories);
            setCategories(tempCategories);
            console.log(categories);
        }
    }

    return (
        <PostListWrapper>
            {!isLoading &&
                <div>

                    <TagList callback = {updateCategories} categories = {categories}/>
                    <Submit isPost = {true} callback = {() => {incrementer(increment + 1)}}/>
                    <ListHeader></ListHeader>
                    {posts.map(post => {     
                            return (
                                <div>
                                    <Post switchToPost = {switchToPost} post = {post}></Post>
                                    <Divider/>
                                </div>
                            )     
                    })}
                </div>
            }
            {isLoading && 
            <Loader>
                {/* <StyledLogo></StyledLogo> */}
                <h2>Unpacking some Boxes</h2>
            </Loader>
            }
        </PostListWrapper>
    )
}

export default PostList;
const PostListWrapper = styled.div`
@media screen and (max-width: 768px) {
    width: 75%;
  }

`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// const StyledLogo = styled(Logo)`
// animation: ${rotate} infinite 2s linear;
// height:10rem;
// width:10rem;
// display:block;
// margin:auto;
// `;

const Loader = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center
color: white;
margin-top: 30vh;


h2 {
    color: white;
    font-weight: 400;
}
`;