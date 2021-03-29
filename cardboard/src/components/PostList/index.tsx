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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vel lacus quis ullamcorper. Phasellus dapibus ligula eget odio sollicitudin, quis scelerisque est feugiat. Etiam sem lorem, condimentum a aliquam in, mollis nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pulvinar magna ac eros finibus, sit amet vulputate nulla laoreet. Sed non sagittis ipsum, pharetra pulvinar nulla. Praesent lectus nunc, porttitor eget suscipit eu, accumsan et tortor.',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        },
        comments: [
            {
                approach: 'utilitarianism',
                time: '5 days ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Common Good',
                time: '1 month ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Other',
                time: '1 year ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            }
        ]
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'technology',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vel lacus quis ullamcorper. Phasellus dapibus ligula eget odio sollicitudin, quis scelerisque est feugiat. Etiam sem lorem, condimentum a aliquam in, mollis nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pulvinar magna ac eros finibus, sit amet vulputate nulla laoreet. Sed non sagittis ipsum, pharetra pulvinar nulla. Praesent lectus nunc, porttitor eget suscipit eu, accumsan et tortor.',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        },
        comments: [
            {
                approach: 'utilitarianism',
                time: '5 days ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Common Good',
                time: '1 month ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Other',
                time: '1 year ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            }
        ]
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'politics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vel lacus quis ullamcorper. Phasellus dapibus ligula eget odio sollicitudin, quis scelerisque est feugiat. Etiam sem lorem, condimentum a aliquam in, mollis nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pulvinar magna ac eros finibus, sit amet vulputate nulla laoreet. Sed non sagittis ipsum, pharetra pulvinar nulla. Praesent lectus nunc, porttitor eget suscipit eu, accumsan et tortor.',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        },
        comments: [
            {
                approach: 'utilitarianism',
                time: '5 days ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Common Good',
                time: '1 month ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Other',
                time: '1 year ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            }
        ]
    },
    {
        title: 'Cuomo got Covid tests for friends and family when access was scarce.',
        category: 'education',
        link: 'https://www.theguardian.com/us-news/2021/mar/25/andrew-cuomo-covid-tests-friends-family',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vel lacus quis ullamcorper. Phasellus dapibus ligula eget odio sollicitudin, quis scelerisque est feugiat. Etiam sem lorem, condimentum a aliquam in, mollis nec ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pulvinar magna ac eros finibus, sit amet vulputate nulla laoreet. Sed non sagittis ipsum, pharetra pulvinar nulla. Praesent lectus nunc, porttitor eget suscipit eu, accumsan et tortor.',
        distribution: {
            good: 150,
            okay: 50,
            bad: 10,
        },
        comments: [
            {
                approach: 'utilitarianism',
                time: '5 days ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Common Good',
                time: '1 month ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            },
            {
                approach: 'Other',
                time: '1 year ago',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar arcu justo, in ullamcorper purus posuere vel. Phasellus aliquam cursus ornare. In turpis lacus, tristique a aliquet at, gravida et augue. Duis lorem magna, sagittis ut nibh quis, luctus posuere ex. Vivamus commodo arcu tincidunt tortor maximus, at facilisis velit blandit. Aliquam et lacus velit.',
            }
        ]
    },
    
]

const PostList = ({switchToPost}: any) => {
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
                            <Post switchToPost = {switchToPost} post = {post}></Post>
                            <Divider/>
                        </div>
                    )
                }else {
                    if (post.category in categories){
                        return (
                            <div>
                                <Post switchToPost = {switchToPost} post = {post}></Post>
                                <Divider/>
                            </div>
                        )
                    }
                    return (
                        <h1>none</h1>
                    )
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