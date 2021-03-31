import React, {useState} from 'react';
import styled from 'styled-components';
import UpIcon from './icons/UpIcon';
import DownIcon from './icons/DownIcon';
const Submit = ({isPost, callback}: {isPost?: boolean, callback: any}) => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [collapse, setCollapse] = useState(false);

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    }
    const handleLinkChange = (event: any) => {
        setLink(event.target.value);
    }
    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    }

    const handleSubmit = () => {
        if(title !== '' && link !== '' && description !== ''){
            fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({category: 'all', title: title, link: link,description: description})
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                clear();
                callback();
            });
        }
    }

    const clear = () => {
        setDescription('');
        setTitle('');
        setLink('');
    }


    return (
        <SubmitWrapper >
            <div className = "newPost" onClick = {() => setCollapse(!collapse)}>
                <h3>Create New Post</h3>
                {!collapse && <StyledUpIcon></StyledUpIcon> }
                {collapse && <StyledDownIcon></StyledDownIcon>}
            </div>
            {!collapse && 
            <div>
                <input className = "titleInput" placeholder = "Title:" value = {title} onChange = {handleTitleChange}></input>
                <input className = "linkInput" placeholder = "Link:" value = {link} onChange = {handleLinkChange}></input>
                <textarea className = "descriptionInput" placeholder = "Description:" value = {description} onChange = {handleDescriptionChange}></textarea>
                <OptionsWrapper>
                    <div className = {'buttonWrapper'}>
                        <button className = 'Cancel' onClick = {clear}>Cancel</button>
                        <button className = 'Submit' onClick = {handleSubmit}>Submit</button>
                    </div>
                </OptionsWrapper>
            </div>
            }
        </SubmitWrapper>
    )
}

export default Submit;

const StyledUpIcon = styled(UpIcon)`
opacity: .3;`;
const StyledDownIcon = styled(DownIcon)`
opacity: .3;`;


const OptionsWrapper = styled.div`
margin-top: 1rem;
width: 100%;
text-align: right;


.buttonWrapper {
    display: inline-block:
    width: 25%;
    .Submit {
        background: #744EFF;
        border-radius: 13px;
        border: none;
        padding-top: .6rem;
        padding-bottom: .6rem;
        padding-right: 1rem;
        padding-left: 1rem;
        color: white;
        margin-left: .5rem;

        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }

    .Cancel {
        border: none;
        background: #464858;
        border-radius: 13px;
        padding-top: .6rem;
        padding-bottom: .6rem;
        padding-right: 1rem;
        padding-left: 1rem;
        color: white;
        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }
}

`


const SubmitWrapper = styled.div`
    margin-top: 2rem;
    background: #363742;
    border-radius: 24.1763px;
    padding: 1.5rem;


    .newPost {
        width: 100%;
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        justify-content: space-between;
        align-items: center;
        :hover {
            opacity: .6;
            cursor: pointer;
        }
    }


    h3 {
        color: white;
        font-weight: 400;
    }

    .titleInput {
        width: 100%;
        background: #464858;
        border-radius: 10px;
        color: white;
        padding: .5rem;
        border: none;
        -webkit-box-sizing: border-box;
    }
    .linkInput {
        margin-top: .8rem;
        margin-bottom: .8rem;
        width: 100%;
        background: #464858;
        border-radius: 10px;
        color: white;
        padding: .5rem;
        border: none;
        -webkit-box-sizing: border-box; 
    }
    .descriptionInput {
        width: 100%;
        padding: .5rem;
        min-height: 100px;
        resize: vertical;
        background: #464858;
        border-radius: 10px;
        border: none;
        color: white;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box; 
    }
`;