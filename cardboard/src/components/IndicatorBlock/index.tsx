import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Button from "../Button";

type IndicatorBlockProps = {
  text: string;
  buttonText: string;
  buttonOnClick?: () => void | {};
};

const IndicatorBlock = ({
  text,
  buttonText,
  buttonOnClick,
}: IndicatorBlockProps) => {
  return (
    <Flex
      bg="gradient.100"
      w="100%"
      align="center"
      justify="space-between"
      height="5rem"
      padding="2rem"
      borderRadius="10px"
    >
      <Text fontSize="lg" color="white">
        {text}
      </Text>
      <Button onClick={() => buttonOnClick} type="secondary">
        {" "}
        {buttonText}{" "}
      </Button>
    </Flex>
  );
};

export default IndicatorBlock;
