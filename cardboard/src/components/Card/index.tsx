import React from "react";
import { Flex } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <Flex
      color="white"
      marginTop="2rem"
      align="flex-start"
      w="100%"
      direction="column"
      minH="100px"
      padding="1rem"
      position="relative"
      bg="background.secondary"
      border="1px solid"
      borderColor="purple.100"
      borderRadius="10px"
    >
      {children}
    </Flex>
  );
};

export default Card;
