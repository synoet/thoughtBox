import React, { useState } from "react";
import { HStack, Image, Input, Select } from "@chakra-ui/react";
import Icon from "../../../images/icon.svg";
import Button from "../../Button";

const CommentCreate = ({
  postId,
  increment,
}: {
  postId: string;
  increment: () => void | {};
}) => {
  const [approach, setApproach] = useState("none");
  const [text, setText] = useState("");
  const postComment = () => {
    fetch(`https://thoughtbox-api.herokuapp.com/comments/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        approach: approach,
        text: text,
      }),
    }).then((res) => res.json());
  };
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
      <Select
        onChange={(event: any) => {
          setApproach(event?.target.value);
        }}
        width="20%"
        placeholder="Approach"
        borderColor="gray.500"
      >
        <option value="none"> None </option>
        <option value="utilitarian"> Utilitarian </option>
        <option value="justice"> Justice </option>
        <option value="common good"> Common Good </option>
        <option value="virtue"> Virtue </option>
      </Select>
      <Input
        value={text}
        onChange={(event: any) => {
          setText(event.target.value);
        }}
        placeholder="New Comment"
        borderColor="gray.500"
      ></Input>
      <Button
        onClick={() => {
          postComment();
          increment();
        }}
        type="primary"
      >
        Create
      </Button>
    </HStack>
  );
};

export default CommentCreate;
