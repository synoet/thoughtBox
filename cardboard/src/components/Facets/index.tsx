import React from "react";
import { Flex, Text, HStack } from "@chakra-ui/react";
import Button from "../Button";
type Item = {
  isSelected: boolean;
  text: string;
  onClick: () => void | {};
};
type FacetsProps = {
  items: Item[];
};
const Facets = ({ items }: FacetsProps) => {
  return (
    <Flex
      marginTop="1rem"
      border="1px solid"
      borderColor="purple.100"
      w="100%"
      align="center"
      height="5rem"
      padding="2rem"
      borderRadius="10px"
    >
      <Text color="white">Categories: </Text>
      <HStack marginLeft="1rem" spacing={3}>
        {items.map((item: Item) => {
          return (
            <Button
              onClick={item.onClick}
              type={item.isSelected ? "primary" : "outlined"}
              rounded={true}
            >
              {item.text}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default Facets;
