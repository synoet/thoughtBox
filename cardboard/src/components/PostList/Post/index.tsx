import React, { useState} from 'react';
import styled from 'styled-components';
import PollBar from './PollBar';
import Emoji from './Emoji';
import ExpandButton from './ExpandButton';
import Reward from 'react-rewards';

const Post = ({post, switchToPost}: {post: any, switchToPost: any}) => {
    const [goodVotes, setGoodVotes] = useState(post.votes.good);
    const [okayVotes, setNeutralVotes] = useState(post.votes.neutral);
    const [badVotes, setBadVotes] = useState(post.votes.bad);
    const [totalVotes, setTotalVotes] = useState(post.votes.good + post.votes.neutral + post.votes.bad);

    let emojiRef: any = [];

    const updateVote = (type: string) => {
        fetch(`https://thoughtbox-api.herokuapp.com/posts/${post._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type: type})
        }).then((res) => console.log(res));
    }


    const handleReward = (index: number) => {
        if(index === 0){
            setGoodVotes(goodVotes + 1);
            updateVote("good");
        }else if(index === 1){
            setNeutralVotes(okayVotes + 1);
            updateVote("neutral");
        }else if(index === 2){
            setBadVotes(badVotes + 1);
            updateVote("bad");
        }
        setTotalVotes(totalVotes + 1);
        emojiRef[index].rewardMe();
    }

    return (
        <PostWrapper>
            <PostTitle>
                <h1> {post.title}</h1>
                <a href = {post.link}>{post.link}</a>
            </PostTitle>
            <ContentDivider></ContentDivider>
            <PostContent>
                <Poll>
                    <EmojiWrapper onClick = {() => handleReward(0)}>
                        <Reward ref={(ref) => { emojiRef[0] = ref }} type = 'confetti'>
                            <Emoji name = 'okay'/>
                        </Reward>
                    </EmojiWrapper>
                    <PollBar votes = {goodVotes} totalVotes = {totalVotes} rank = {1} />
                </Poll>
                <Poll>
                    <EmojiWrapper onClick = {() => handleReward(1)}>
                        <Reward ref={(ref) => { emojiRef[1] = ref }} type = 'confetti'>
                            <Emoji name = 'good'/>
                        </Reward>
                    </EmojiWrapper>
                    <PollBar votes = {okayVotes} totalVotes = {totalVotes} rank = {2} />
                </Poll>
                <Poll>
                    <EmojiWrapper onClick = {() => handleReward(2)}>
                        <Reward ref={(ref) => { emojiRef[2] = ref }} type = 'confetti'>
                            <Emoji name = 'bad'/>
                        </Reward>
                    </EmojiWrapper>
                    <PollBar votes = {badVotes} totalVotes = {totalVotes} rank = {3} />
                </Poll>
            </PostContent>
            <ExpandButton callback = {() => switchToPost(post._id)}/>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
position: relative;
background: #363742;
border-radius: 24.1763px;
max-width: 100%;
min-height: 250px;
@media screen and (max-width: 768px) {
    width: 75%;
  }
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

const EmojiWrapper = styled.div`
display: inline-block;
:hover {
transform: scale(1.1);
}
`;

export default Post;

