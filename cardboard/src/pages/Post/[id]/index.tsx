import React, {useEffect, useState} from "react";
import {Flex, VStack, HStack, Text, Image, Divider} from '@chakra-ui/react';
import Button from '../../../components/Button';
import Voting from '../../../components/Voting';
import SpectrumGraph from '../../../components/SpectrumGraph';
import CommentCreate from '../../../components/Create/CommentCreate';
const Post = ({match}: {match: any}) => {
  const [data, setData] = useState<any>();
  const {
    params: { id }
  } = match;

  useEffect(() => {
    if(id){
      fetch(`https://thoughtbox-api.herokuapp.com/post/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    }
  }, [])


  return (
    <>
    {data &&
      <Flex color = 'white' w = '100%' borderRadius = '10px' border = '1px solid #763DE9' direction = 'column' minH = '500px'>
        <VStack padding = '2rem' align = 'flex-start'>
          <HStack>
            <Text>Category:</Text>
            <Button type = 'primary' rounded = {true}>{data.category}</Button>
          </HStack>
          <Text fontSize = '4xl'>{data.title}</Text>
          <Text fontSize = 'lg'>{data.description}</Text>
        </VStack>
        <Divider borderColor = "gray.600"/>
        <VStack padding = '2rem'>
          <Voting postId = {id} type = {data.type} data = {data.votes} />
        </VStack>
        <Divider borderColor = "gray.600"/>
        <VStack padding = '2rem' w = '100%'>
          <SpectrumGraph type = {data.type} data = {data.votes}/>
        </VStack>
        <Divider borderColor = "gray.600"/>
        <VStack padding = '2rem' w = '100%'>
          <CommentCreate />

        </VStack>
      </Flex>
    }
    </>
  )
};

export default Post;
