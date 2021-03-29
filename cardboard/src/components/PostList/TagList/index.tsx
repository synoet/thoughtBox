import React from 'react';
import Tag from './Tag';
import Divider from './Divider';
import styled from 'styled-components';

const data = [
    {
        name: 'all',
        isSelected: true 
    },
    {
        name: 'science',
        isSelected: false
    },
    {
        name: 'technology',
        isSelected: false
    },
    {
        name: 'health',
        isSelected: false
    },
    {
        name: 'pop-culture',
        isSelected: false
    }, 
    {
        name: 'politics',
        isSelected: false
    },
    {
        name: 'education',
        isSelected: false
    }
]
const TagList = ({callback, categories}: {callback: any, categories: string[]}) => {
    return (
        <TagListWrapper>
            {data.map(item => {
                return (
                    <Tag onClick = {() => callback(item.name)} name = {item.name} isSelected = {categories.indexOf(item.name) > -1 ? true : item.isSelected}></Tag>
                )
            })}
            <Divider />
        </TagListWrapper>
    )
}

export default TagList

const TagListWrapper = styled.div`
`;