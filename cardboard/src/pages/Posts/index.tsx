import React, {useState, useEffect} from 'react'
import {Flex} from '@chakra-ui/react';
import {useHistory} from 'react-router-dom';
import IndicatorBlock from '../../components/IndicatorBlock';
import Facets from '../../components/Facets';

const FacetItems = [
  {
    isSelected: true,
    text: "All",
    onClick: () => {}
  },
  {
    isSelected: false,
    text: "Science",
    onClick: () => {}
  },
  {
    isSelected: false,
    text: "Technology",
    onClick: () => {}
  },
  {
    isSelected: false,
    text: "Finance",
    onClick: () => {}
  },
  {
    isSelected: false,
    text: "Politics",
    onClick: () => {}
  },
  
]

const Posts = () => {
  const history = useHistory();
  const [posts, setPosts] = useState();
  const [increment, setIncrement] = useState();

  useEffect(() => {
    fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
        setPosts(res);
    })
  }, [increment])
  
  return (
    <Flex w = '100%' direction = 'column' align = 'center'>
      <IndicatorBlock text = "You are currently viewing Posts" buttonText = "Swtich" buttonOnClick = {() => history.push('/pallets')}/>
      <Facets items = {FacetItems}/>
    </Flex>
  )
}

export default Posts;
