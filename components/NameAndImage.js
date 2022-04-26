import React from "react";
import { Box, Image, Heading, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Section } from "./Section";

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blink = keyframes`
    0%,100% {
        border-right:2px solid white;

    }
    50% {
        border-right:2px solid #222;
    } 
`;

const hidden = keyframes`
    0%,100% {
        visibility: hidden

    }

`;

const NameAndImage = () => {
  const typingAnimation = `${typing} 1.5s steps(13) forwards 0.5s`;

  const hiddenAnimation = `${hidden} 0.5s 1`;

  const blinkAnimation = `${blink} 2.1s 4`;

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      justifyContent="space-between"
      mb={6}
      pt={5}
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box maxWidth="269.02px">
          <Heading
            whiteSpace="nowrap"
            overflow="hidden"
            fontFamily="monospace"
            animation={`${typingAnimation} , ${blinkAnimation} , ${hiddenAnimation}`}
            letterSpacing="wide"
            fontWeight="bold"
            fontSize="36px"
          >
            Aloysius Tan&nbsp;
          </Heading>

          <Section delayDuration="0">
            <Heading fontSize="md" letterSpacing="wide" pt={4}>
              Software Engineer
            </Heading>
          </Section>
        </Box>
      </Box>
      <Section delayDuration="0">
        <Box display={{ base: "flex", md: "block" }} justifyContent="center">
          <Image
            my={{ base: "30px", md: "0" }}
            borderRadius="full"
            boxSize="180px"
            src="/images/profile.jpg"
            alt="Aloysius Tan"
          />
        </Box>
      </Section>
    </Box>
  );
};

export default NameAndImage;
