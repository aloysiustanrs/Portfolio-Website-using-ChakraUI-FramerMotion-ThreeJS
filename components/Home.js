import { Box, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Heading>About</Heading>
      <Text pr={{ md: "80px" }} pt="30px" lineHeight={"30px"}>
        Aloysius is a software engineer from Singapore with a passion to learn
        new technologies and work on projects. He also loves problem-solving
        questions from sites such as Leetcode. Other than programming, he likes
        to play online video games.
      </Text>
    </Box>
  );
};

export default Home;
