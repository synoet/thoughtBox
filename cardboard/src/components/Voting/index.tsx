import React, {useEffect, useState} from 'react';
import {Flex, VStack, HStack, Image, Box, Text} from '@chakra-ui/react';
import styled from 'styled-components';
import good from '../../images/voting-icons/good.svg';
import neutral from '../../images/voting-icons/neutral.svg';
import bad from '../../images/voting-icons/bad.svg';
import yes from '../../images/voting-icons/yes.svg';
import no from '../../images/voting-icons/no.svg';

type VotingProps = {
  type: "boolean" | "spectrum",
  data: any

}

const Voting = ({type, data}: VotingProps) => {
  const [totalVotes, setTotalVotes] = useState(5);
  const [goodVotes, setGoodVotes] = useState(0);
  const [neutralVotes, setNeutralVotes] = useState(0);
  const [badVotes, setBadVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [yesVotes, setYesVotes] = useState(0);

  useEffect(() => {
    if(type === 'spectrum'){
      setGoodVotes(data.good)
      setNeutralVotes(data.neutral)
      setBadVotes(data.bad)
      setTotalVotes(data.bad + data.good + data.neutral);
    }else if(type === 'boolean'){
      setNoVotes(data.no);
      setYesVotes(data.yes);
      setTotalVotes(data.no + data.yes);
    }
  }, [])

  if (type === 'spectrum'){
    return (
      <VStack align = 'flex-start' w = '100%' spacing = {5}>
        <HStack w = '90%' spacing = {3}>
          <VotingIcon src = {good} />
          <Box h = '20px' w = {`${(goodVotes / totalVotes) != 0 ? (goodVotes / totalVotes)  * 100: .1 * 100}%`} bg = 'gradient.100' borderRadius = '10px'/>
          <Text>{goodVotes} votes</Text>
        </HStack>
        <HStack spacing = {3} w = '90%'>
          <VotingIcon src = {neutral} />
          <Box h = '20px' w = {`${(neutralVotes / totalVotes) != 0 ? (neutralVotes / totalVotes)  * 100: .1 * 100}%`} bg = 'gradient.100' borderRadius = '10px'/>
          <Text>{neutralVotes} votes</Text>
        </HStack>
        <HStack spacing = {3} w = '90%'>
          <VotingIcon src = {bad} />
          <Box h = '20px' w = {`${(badVotes / totalVotes) != 0 ? (badVotes / totalVotes)  * 100: .1 * 100}%`} bg = 'gradient.100' borderRadius = '10px'/>
          <Text>{badVotes} votes</Text>
        </HStack>
      </VStack>
  
    )
  }else {
    return (
      <VStack align = 'flex-start' w = '100%' spacing = {3}>
        <HStack w = '90%' spacing = {3}>
          <VotingIcon onClick = {() => {
            setYesVotes(yesVotes + 1)
            setTotalVotes(totalVotes + 1);
            }} src = {yes} />
          <Box h = '20px' w = {`${(yesVotes / totalVotes) != 0 ? (yesVotes / totalVotes)  * 100: .1 * 100}%`} bg = 'gradient.100' borderRadius = '10px'/>
          <Text>{yesVotes} votes</Text>
        </HStack>
        <HStack spacing = {3} w = '90%'>
          <VotingIcon onClick = {() => {
            setNoVotes(noVotes + 1)
            setTotalVotes(totalVotes + 1)
            }}src = {no} />
          <Box h = '20px' w = {`${(noVotes / totalVotes) != 0 ? (noVotes / totalVotes)  * 100: .1 * 100}%`} bg = 'gradient.100' borderRadius = '10px'/>
          <Text>{noVotes} votes</Text>
        </HStack>
      </VStack>
    )
  }
}

export default Voting;

const VotingIcon = styled(Image)`
transition: transform 0.2s;
height: 30px;
width: 30px;

:hover {
  transform: scale(1.2);
  cursor: pointer;
}`;