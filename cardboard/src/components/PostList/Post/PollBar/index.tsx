import React from 'react';

import styled from 'styled-components';

const PollBar = ({votes, rank, totalVotes}: {votes: number, rank: number, totalVotes: number}) => {
    return (
        <BarWrapper>
            <Bar style = {{width: `${(votes/totalVotes) * 100 + 20}%`, opacity: `${.2 + (.2 * (4-rank))}`}} />
            <p>{`${votes} votes`}</p>
        </BarWrapper>
    )
}

export default PollBar;

const BarWrapper = styled.div`
width: 80%;
display: inline-block;
vertical-align: middle;
margin-left: 10px;

p {
    display: inline-block;
    margin-left: 15px;
    color: white;
}
`;
const Bar = styled.div`
height: 12px;
background: #744EFF;
border-radius: 7px;
display: inline-block;

`;
