import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import IndicatorBlock from "../../components/IndicatorBlock";
import Facets from "../../components/Facets";
import PostItem from "./PostItem";
import SmallCreate from "../../components/Create/SmallCreate";

const Posts = () => {
  const history = useHistory();
  const [posts, setPosts] = useState<any>();
  const [items, setItems] = useState([
    {
      isSelected: true,
      text: "All",
      onClick: () => {},
    },
  ]);

  const filterPosts = (category: string) => {
    const tempFacets: any = [];
    FacetItems.map((item: any) => {
      if (item.text.toLowerCase() === category) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      tempFacets.push(item);
    });
    setItems(tempFacets);
    if (category === "all") {
      fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setPosts(res);
        });
    } else {
      fetch(`https://thoughtbox-api.herokuapp.com/posts/${category}/category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setPosts(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const FacetItems = [
    {
      isSelected: true,
      text: "All",
      onClick: () => {
        filterPosts("all");
      },
    },
    {
      isSelected: false,
      text: "Science",
      onClick: () => {
        filterPosts("science");
      },
    },
    {
      isSelected: false,
      text: "Technology",
      onClick: () => {
        filterPosts("technology");
      },
    },
    {
      isSelected: false,
      text: "Finance",
      onClick: () => {
        filterPosts("finance");
      },
    },
    {
      isSelected: false,
      text: "Politics",
      onClick: () => filterPosts("politics"),
    },
  ];

  useEffect(() => {
    setItems(FacetItems);
    fetch(`https://thoughtbox-api.herokuapp.com/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  }, []);

  return (
    <Flex w="100%" direction="column" align="center">
      <IndicatorBlock
        text="You are currently viewing Posts"
        buttonText="Swtich"
        buttonOnClick={() => history.push("/pallets")}
      />
      {items && <Facets items={items} />}
      <SmallCreate />
      {posts && (
        <>
          {posts.map((post: any) => {
            return (
              <PostItem
                title={post.title}
                description={post.description}
                voting={post.votes}
                type={post.type}
                postId={post._id}
              />
            );
          })}
        </>
      )}
    </Flex>
  );
};

export default Posts;
