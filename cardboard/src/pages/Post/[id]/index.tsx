import React, { useEffect, useState } from "react";
import { Flex, VStack, HStack, Text, Divider, Switch, FormControl, FormLabel} from "@chakra-ui/react";
import Button from "../../../components/Button";
import Voting from "../../../components/Voting";
import SpectrumGraph from "../../../components/SpectrumGraph";
import CommentCreate from "../../../components/Create/CommentCreate";
import Comment from "./Comment";

const Post = ({ match }: { match: any }) => {
  const [data, setData] = useState<any>();
  const [increment, setIncrement] = useState(0);

  const {
    params: { id },
  } = match;


  useEffect(() => {
    if (id){
      fetch(`https://thoughtbox-api.herokuapp.com/post/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    }
  }, [increment, id]);



  return (
    <>
      {data && (
        <Flex
          color="white"
          w="100%"
          borderRadius="10px"
          border="1px solid #763DE9"
          direction="column"
          minH="500px"
        >
          <VStack padding="2rem" align="flex-start">
            <HStack w = '100%' justify = 'space-between'>
              <HStack>
                <Text>Category:</Text>
                <Button type="primary" rounded={true}>
                  {data.category}
                </Button>
              </HStack>
              <HStack>
              <FormControl display="flex" alignItems="center" justify = 'center'>
                <FormLabel >
                  Live Mode: 
                </FormLabel>
                <Switch onChange = {() => {

                }} size = 'lg' colorScheme = "purple"/>
              </FormControl>
              </HStack>
            </HStack>
            <Text fontSize="4xl">{data.title}</Text>
            <Text fontSize="lg">{data.description}</Text>
          </VStack>
          <Divider borderColor="gray.600" />
          <VStack padding="2rem">
            <Voting postId={id} type={data.type} data={data.votes} />
          </VStack>
          <Divider borderColor="gray.600" />
          <VStack padding="2rem" w="100%">
            <SpectrumGraph type={data.type} data={data.votes} />
          </VStack>
          <Divider borderColor="gray.600" />
          <VStack align="flex-start" padding="2rem" w="100%" spacing={5}>
            <Text fontSize="2xl" marginBottom="1rem">
              Comments
            </Text>
            <CommentCreate
              postId={id}
              increment={() => {
                setIncrement(increment + 1);
              }}
            />
            {data.comments.length > 0 &&
              data.comments.map((comment: any) => {
                return (
                  <Comment approach={comment.approach} text={comment.text} />
                );
              })}
            {data.comments.length === 0 && (
              <HStack w="100%" align="center" justify="center" padding="2rem">
                <Text color="gray.500">No Comments Yet</Text>
              </HStack>
            )}
          </VStack>
        </Flex>
      )}
    </>
  );
};

export default Post;
