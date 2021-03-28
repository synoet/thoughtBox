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
const TagList = () => {
    return (
        <TagListWrapper>
            {data.map(item => {
                return (
                    <Tag name = {item.name} isSelected = {item.isSelected}></Tag>
                )
            })}
            <Divider />
        </TagListWrapper>
    )
}

export default TagList

const TagListWrapper = styled.div`
`;