import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Emoji from '../PostList/Post/Emoji';
import PollBar from '../PostList/Post/PollBar';
import Reward from 'react-rewards';
import CommentsList from './CommentsList';
import CloseButton from './CloseButton';
export type Post = {
    title: string, 
    description: string, 
    link: string,
    time: Date,
    _id: string,
    comments: [],
    
}
const FullPost = ({postId, handleClosePost}: any) => {
    const [post, setPost] = useState<Post>();
    const [isLoading, setIsLoading] = useState(true);
    const [goodVotes, setGoodVotes] = useState(0);
    const [neutralVotes, setNeutralVotes] = useState(0);
    const [badVotes, setBadVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);


    useEffect(() => {
        fetch(`https://thoughtbox-api.herokuapp.com/posts/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setPost(res);
            setGoodVotes(res.votes.good);
            setNeutralVotes(res.votes.neutral);
            setBadVotes(res.votes.bad);
            setTotalVotes(res.votes.good + res.votes.neutral + res.votes.bad)
        }).then(() => {setIsLoading(false)})
    }, [postId])

    let emojiRef: any = [];


    const updateVote = (type: string) => {
        if(post){
            fetch(`https://thoughtbox-api.herokuapp.com/posts/${post._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({type: type})
            }).then((res) => console.log(res));

        }
    }


    const handleReward = (index: number) => {
        if(index === 0){
            setGoodVotes(goodVotes + 1);
            updateVote("good");
        }else if(index === 1){
            setNeutralVotes(neutralVotes + 1);
            updateVote("neutral");
        }else if(index === 2){
            setBadVotes(badVotes + 1);
            updateVote("bad");
        }
        setTotalVotes(totalVotes + 1);
        emojiRef[index].rewardMe();
    }
    return (
        <div>
            {(!isLoading  && post) &&
                <PostWrapper>
                    <h1 className = 'postTitle'>{post.title}</h1>
                    <a href = {post?.link && post.link}>{post.link}</a>
                    <p className = {'description'}>{post.description}</p>
                    <ContentDivider />
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
                            <PollBar votes = {neutralVotes} totalVotes = {totalVotes} rank = {2} />
                        </Poll>
                        <Poll>
                            <EmojiWrapper onClick = {() => handleReward(2)}>
                                <Reward ref={(ref) => { emojiRef[2] = ref }} type = 'confetti'>
                                    <Emoji name = 'bad'/>
                                </Reward>
                            </EmojiWrapper>
                            <PollBar votes = {badVotes} totalVotes = {totalVotes} rank = {3} />
                        </Poll>
                    <ContentDivider />
                    <CommentsList comments = {post.comments}/>
                    <CloseButton callback = {handleClosePost} />

                </PostWrapper>
            }
        </div>

    )
}

export default FullPost;

const PostWrapper = styled.div`
position: relative;
background: #363742;
border-radius: 24.1763px;
width: 100%;
min-height: 400px;
padding: 1.5rem;

.postTitle {
    color: white;
    font-weight: 400;
    width: 75%;
}

a {
    text-decoration: none;
    color: white;
    opacity: .6;
}

.description {
    color: white;
    opacity: .9;
}
`;

const ContentDivider = styled.div`
background: #FFFFFF;
opacity: 0.3;
border-radius: 6.89209px;
height: 2px;
`;

const Poll = styled.div`
vertical-align: middle;

`;
const EmojiWrapper = styled.div`
display: inline-block;
:hover {
transform: scale(1.1);
}
`;