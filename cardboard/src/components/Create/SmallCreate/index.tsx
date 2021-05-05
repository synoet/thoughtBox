import React from "react";
import { HStack, Image, Input } from "@chakra-ui/react";
import Icon from "../../../images/icon.svg";
import { useHistory } from "react-router-dom";
const SmallCreate = () => {
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
      <Input
        onClick={() => {
          history.push("/create");
        }}
        placeholder="Create a New Post"
        borderColor="transparent"
      ></Input>
    </HStack>
  );
};

export default SmallCreate;
