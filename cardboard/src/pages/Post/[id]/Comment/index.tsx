import React from "react";
import Card from "../../../../components/Card";
import { HStack, Text } from "@chakra-ui/react";

type CommentProps = {
  approach: string;
  text: string;
};
const Comment = ({ approach, text }: CommentProps) => {
  return (
    <Card>
      <HStack>
        <Text color="gray.400">Approach: </Text>
        <Text color="purple.200">{approach} </Text>
      </HStack>
      <Text marginTop="1rem">{text}</Text>
    </Card>
  );
};

export default Comment;
