import React from 'react';
import { VStack, Text, Divider, HStack} from '@chakra-ui/react';
import Card from '../../../components/Card';
import Voting from '../../../components/Voting';
import Button from '../../../components/Button';
type PostItemProps = {
  title: string,
  description: string,
  link?: string,
  voting?: any,
  type: "boolean" | "spectrum"
}

const PostItem = ({title, description, link, voting, type}: PostItemProps) => {
  return (
    <Card>
      <VStack spacing = {5} align = 'flex-start' w = '100%'paddingBottom = '1rem'>
        <VStack spacing = {3} align = 'flex-start'>
          <Text fontSize = 'xl'>{title}</Text>
          <Text  fontSize = 'sm' color = "grey">{description}</Text>
        </VStack>
        <Divider opacity = '.2'w = '100%' />
        <Voting type = {type} data = {voting}/>
        <HStack position = 'absolute' right = '0' bottom = '0' padding = '1.5rem' spacig = {5}>
          <Button type = 'outlined'>View Link</Button>
          <Button type = 'primary'>Expand</Button>
        </HStack>
      </VStack>
    </Card>

  )
}

export default PostItem;