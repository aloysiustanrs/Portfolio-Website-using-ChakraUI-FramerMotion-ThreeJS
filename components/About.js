import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Section } from "./Section";

const About = () => {
  return (
    <Section delayDuration={0.2}>
      <Box>
        <Heading>About</Heading>
        <Text pr={{ md: "80px" }} pt="30px" lineHeight={"30px"}>
          Aloysius is a software engineer from Singapore with a passion to learn
          new technologies and work on projects. He also loves problem-solving
          questions from sites such as Leetcode. Other than programming, he
          likes to play online video games.
        </Text>
      </Box>
    </Section>
  );
};

export default About;
