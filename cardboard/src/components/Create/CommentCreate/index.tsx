import React, {useState} from "react";
import { HStack, Image, Input, Select } from "@chakra-ui/react";
import Icon from "../../../images/icon.svg";
import { useHistory } from "react-router-dom";
import Button from '../../Button';

const CommentCreate = () => {
  const history = useHistory();
  return (
    <HStack
      marginTop="2rem"
      marginBottom="1rem"
      spacing={3}
      mHeight="100px"
      w="100%"
      bg="background.secondary"
      border="1px solid"
      borderRadius="5px"
      borderColor="purple.200"
      color="white"
      padding="1rem"
    >
      <Image src={Icon} h="30px" w="30px" />
      <Select width = '20%' placeholder = 'Approach' borderColor = 'gray.500'>
        <option> None </option>
        <option> Nihilism </option>
        <option> Utilitarianism </option>
        <option> Common Good </option>
        <option> Deontology </option>
        <option> Vrtue Ethics </option>
      </Select>
      <Input
        placeholder="New Comment"
        borderColor = 'gray.500'
      ></Input>
      <Button type = 'primary'>Create</Button>
    </HStack>
  );
};

export default CommentCreate;
