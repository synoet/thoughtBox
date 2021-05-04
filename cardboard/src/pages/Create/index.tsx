import React, {useState} from 'react'
import {Flex, HStack, VStack, Input, Textarea, Select, Box, Text, Divider, Image} from '@chakra-ui/react';
import lock from '../../images/lock.svg';
import Button from '../../components/Button';

const categories = [
  'All',
  'Science',
  'Technology',
  'Politics',
  'Finance'
]

const Create = () => {
  const [selectedCategory, setCategory] = useState('All');
  return (
    <Flex w = '100%' direction = 'row' minH = '300px'>
      <VStack bg = "background.secondary" w = '75%' h = '100%' direction = 'column' border = '1px solid' borderColor = 'purple.100' borderRadius = '10px' padding = '2rem' spacing = {7}>
        <Input placeholder = 'Title' borderColor = 'gray.600'></Input>
        <Input placeholder = 'Link To Article' borderColor = 'gray.600'></Input>
        <Textarea minH = '200px' placeholder = 'Description' borderColor = 'gray.600'></Textarea>
        <Divider borderColor = "gray.600" />
        <HStack w = '100%' color = 'gray.200' spacing = {5}>
          <Text>Category: </Text>
          {categories.map((category: any) => {
            return (
              <Button onClick = {() => {setCategory(category)}}type = {category === selectedCategory ? 'primary' : 'outlined'}>{category}</Button>
            )
          })}
        </HStack>
        <Divider borderColor = "gray.600" />
        <HStack align = 'flex-start' w = '100%' justify = 'space-between'>

          <HStack>
            <Text color = 'gray.200'>Poll Type: </Text>
            <Select placeholder = 'Boolean (yes/no)' color = 'gray.200' borderColor = 'gray.600'  w = '50%'>
              <option value = 'spectrum' >Spectrum (Good, Neutral, Bad)</option>
            </Select>
          </HStack>
          <Button type = 'primary'>Create Post</Button>
        </HStack>
      </VStack>
      <VStack bg = "background.secondary" color = 'gray.300' marginLeft = '1rem' w = '25%' direction = 'column' border = '1px solid' borderColor = 'purple.100' borderRadius = '10px' padding = '1rem' align = 'flex-start'>
        <HStack marginBottom = '1rem' spacing = {3}>
          <Image h = '40px' w = '40px' src = {lock} />
          <Text fontSize = '2xl' fontWeight = '500' color = 'gray.200'> Posting Rules </Text>
        </HStack>
        <VStack align = 'flex-start' spacing = {3}>
          <Divider w = '100%' borderColor = 'gray.500' />
          <Text>1. Remember the human</Text>
          <Divider w = '100%' borderColor = 'gray.500' />
          <Text>2. Behave respectfully</Text>
          <Divider w = '100%' borderColor = 'gray.500' />
          <Text>3. Look for the original source of content</Text>
          <Divider w = '100%' borderColor = 'gray.500' />
          <Text>4. Search for duplicates before posting</Text>
          <Divider w = '100%' borderColor = 'gray.500' />
          <Text>5. Read the community’s rules</Text>
          <Divider w = '100%' borderColor = 'gray.500' />

        </VStack>

      </VStack>
    </Flex>
  )
}

export default Create;