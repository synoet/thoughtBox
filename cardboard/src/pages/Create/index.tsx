import React, { useState } from "react";
import {
  Flex,
  HStack,
  VStack,
  Input,
  Textarea,
  Select,
  Box,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import lock from "../../images/lock.svg";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
const categories = ["All", "Science", "Technology", "Politics", "Finance"];

const Create = () => {
  const [selectedCategory, setCategory] = useState("all");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string>("boolean");

  const history = useHistory();
  const Submit = () => {
    if (title !== "" && link !== "" && description !== "") {
      fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: selectedCategory,
          title: title,
          link: link,
          type: type,
          description: description,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          history.push("/posts");
        });
    }
  };

  return (
    <Flex w="100%" direction="row" minH="600px">
      <VStack
        bg="background.secondary"
        w="75%"
        h="100%"
        direction="column"
        border="1px solid"
        borderColor="purple.100"
        borderRadius="10px"
        padding="2rem"
        spacing={7}
      >
        <Input
          color="white"
          placeholder="Title"
          borderColor="gray.600"
          value={title}
          onChange={(event: any) => {
            setTitle(event.target.value);
          }}
        ></Input>
        <Input
          color="white"
          placeholder="Link To Article"
          borderColor="gray.600"
          onChange={(event: any) => {
            setLink(event.target.value);
          }}
        ></Input>
        <Textarea
          color="white"
          minH="200px"
          placeholder="Description"
          onChange={(event: any) => {
            setDescription(event.target.value);
          }}
          borderColor="gray.600"
        ></Textarea>
        <Divider borderColor="gray.600" />
        <HStack w="100%" color="gray.200" spacing={5}>
          <Text>Category: </Text>
          {categories.map((category: any) => {
            return (
              <Button
                onClick={() => {
                  setCategory(category.toLowerCase());
                }}
                type={
                  category.toLowerCase() === selectedCategory
                    ? "primary"
                    : "outlined"
                }
                rounded = {true}
              >
                {category}
              </Button>
            );
          })}
        </HStack>
        <Divider borderColor="gray.600" />
        <HStack align="flex-start" w="100%" justify="space-between">
          <HStack>
            <Text color="gray.200">Poll Type: </Text>
            <Select
              onChange={(event: any) => {
                setType(event.target.value);
              }}
              value="boolean"
              placeholder="Boolean (yes/no)"
              color="gray.200"
              borderColor="gray.600"
              w="50%"
            >
              <option value="spectrum">Spectrum (Good, Neutral, Bad)</option>
            </Select>
          </HStack>
          <HStack>
            <Button
              type="outlined"
              onClick={() => {
                history.push("/posts");
              }}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={Submit}>
              Create Post
            </Button>
          </HStack>
        </HStack>
      </VStack>
      <VStack
        bg="background.secondary"
        color="gray.300"
        maxHeight="600px"
        marginLeft="1rem"
        w="25%"
        direction="column"
        border="1px solid"
        borderColor="purple.100"
        borderRadius="10px"
        padding="1rem"
        align="flex-start"
      >
        <HStack marginBottom="1rem" spacing={3}>
          <Image h="40px" w="40px" src={lock} />
          <Text fontSize="2xl" fontWeight="500" color="gray.200">
            {" "}
            Posting Rules{" "}
          </Text>
        </HStack>
        <VStack align="flex-start" spacing={3}>
          <Divider w="100%" borderColor="gray.500" />
          <Text>1. Remember the human</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>2. Behave respectfully</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>3. Look for the original source of content</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>4. Search for duplicates before posting</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>5. Be Respectful of peoples opinions</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>6. Dont be Mean :)</Text>
          <Divider w="100%" borderColor="gray.500" />
          <Text>6. Dont abuse voting System</Text>
          <Divider w="100%" borderColor="gray.500" />
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Create;
