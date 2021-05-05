import React from 'react';
import {Flex, Box, Text, HStack} from '@chakra-ui/react';

type SpectrumGraphProps = {
  type: 'spectrum' | 'boolean',
  data: any,
}
const SpectrumGraph = ({type, data}: SpectrumGraphProps) => {
  return(
    <Flex direction = 'column' align = 'center' w = '100%' height = '100px' justify = 'center'>
      <Flex direction = 'row' w = '100%' position = 'relative'>
        <Box
          h="20px"
          w= '100%'
          bg="gradient.100"
          borderRadius="10px"
          opacity = '.3'
          position = 'absolute'
          zIndex = "0"
        />
        {type == 'boolean' && 
        <Box
          h="20px"
          w= '20px'
          bg="gradient.100"
          borderRadius="30px"
          opacity = "1"
          position = 'absolute'
          marginLeft = {`${50 - (((data.no - data.yes) / (data.no + data.yes)) * 100 )}%`}
          zIndex = "2"
        />
        }
        {type == 'spectrum' && 
        <Box
          h="20px"
          w= '20px'
          bg="gradient.100"
          borderRadius="30px"
          opacity = "1"
          position = 'absolute'
          marginLeft = {`${50 + (((data.good - data.bad) / (data.good + data.bad)) * 100 )}%`}
          zIndex = "2"
        />
        }
        {type === 'boolean' && 
          <Text color = "white" position = 'absolute' marginTop = '2rem' marginLeft = {`${50 - (((data.no - data.yes) / (data.no + data.yes)) * 100 ) - 2}%`}>Average</Text>
        }
        {type === 'spectrum' && 
          <Text color = "white" position = 'absolute' marginTop = '2rem' marginLeft = {`${50 + (((data.good - data.bad) / (data.good + data.bad)) * 100 ) - 2}%`}>Average</Text>
        }
        
        {type == 'spectrum' && 
        <HStack zIndex = "100" w = '100%' justify = 'space-between' marginTop = '2rem'>
          <Text>Bad</Text>
          <Text>Neutral</Text>
          <Text>Good</Text>
        </HStack>
        }
        {type == 'boolean' && 
        <HStack zIndex = "100" w = '100%' justify = 'space-between' marginTop = '2rem'>
          <Text color = 'white'>No</Text>
          <Text>Yes</Text>
        </HStack>
        }

      </Flex>


    </Flex>
  )
}

export default SpectrumGraph;