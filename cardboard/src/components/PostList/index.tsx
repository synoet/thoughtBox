import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import ListHeader from './ListHeader';
import Post from './Post';
import TagList from './TagList';


export type Post = []

const PostList = ({switchToPost}: any) => {
    const [categories, setCategories] = useState(['all']);
    const [posts, setPosts] = useState<Post>([]);
    const [isLoading, setIsLoading] = useState(true);
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
        }).then(() => {setIsLoading(false)})
    }, [])

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
            <TagList callback = {updateCategories} categories = {categories}/>
            <ListHeader></ListHeader>
            {posts.map(post => {     
                console.log(post);
                if(!isLoading){
                    return (
                        <div>
                            <Post switchToPost = {switchToPost} post = {post}></Post>
                            <Divider/>
                        </div>
                    )

                }       
            })}
        </PostListWrapper>
    )
}

export default PostList;
const PostListWrapper = styled.div`
@media screen and (max-width: 768px) {
    width: 75%;
  }

`;