import React from 'react'
import {Flex, Text} from '@chakra-ui/react';
import Button from '../Button';


const IndicatorBlock = () => {
  return (
      <Flex bg = "gradient.100" w = '100%' align = 'center' justify = 'space-between' height = '5rem' padding = '2rem' borderRadius = '10px'>
        <Text fontSize = "lg" color = "white">You are currently viewing Posts</Text>
        <Button type = 'secondary'> Switch </Button>
      </Flex>
  )
}


export default IndicatorBlock;
