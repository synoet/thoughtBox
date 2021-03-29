import React, {useState} from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import ListHeader from './ListHeader';
import Post from './Post';
import TagList from './TagList';

const data = [
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'science',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'technology',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'politics',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'education',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        }
    },
    
]

const PostList = () => {
    const [categories, setCategories] = useState(['all']);

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
            {data.map(post => {
                if (Object.keys(categories).length === 1 && categories[0] === 'all'){
                    return (
                        <div>
                            <Post title = {post.title} link = {post.link} distribution = {post.distribution}></Post>
                            <Divider/>
                        </div>
                    )
                }else {
                    if (post.category in categories){
                        return (
                            <div>
                                <Post title = {post.title} link = {post.link} distribution = {post.distribution}></Post>
                                <Divider/>
                            </div>
                        )
                    }
                }
            })}
        </PostListWrapper>
    )
}

export default PostList;
const PostListWrapper = styled.div`
min-width: 600px;
max-width: 900px;
`;