import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Section } from "./Section";

const About = () => {
  return (
    <Section delayDuration={0.2}>
      <Box paddingTop="40px" paddingBottom="60px">
        <Heading size="xl" letterSpacing="wide">
          About
        </Heading>
        <Text pr="40px" pt="30px" lineHeight={"30px"}>
          Aloysius is a software engineer from Singapore with a passion to learn
          new technologies and work on projects. He also loves to practice
          solving coding problems from sites such as Leetcode. Other than
          programming, he likes to play online video games.
        </Text>
      </Box>
    </Section>
  );
};

export default About;
