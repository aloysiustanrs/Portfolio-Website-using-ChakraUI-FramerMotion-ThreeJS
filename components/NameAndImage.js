import React from "react";
import { Box, Image, Heading, keyframes } from "@chakra-ui/react";

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

const NameAndImage = () => {
  const typingAnimation = `${typing} 3s steps(13) forwards`;

  const blinkAnimation = `${blink} 2s 5`;

  return (
    <Box display={{ base: "block", md: "flex" }} justifyContent="space-between">
      <Box
        display={{ base: "flex", md: "block" }}
        flexDirection="column"
        justifyContent="center"
      >
        <Box maxWidth="269.02px">
          <Heading
            whiteSpace="nowrap"
            overflow="hidden"
            fontFamily="monospace"
            animation={`${typingAnimation} , ${blinkAnimation}`}
            letterSpacing="wide"
            fontSize="36px"
          >
            Aloysius Tan&nbsp;
          </Heading>

          <Heading fontSize="md" letterSpacing="wide" pt={4}>
            Software Engineer
          </Heading>
        </Box>
      </Box>
      <Box display={{ base: "flex", md: "block" }} justifyContent="center">
        <Image
          my={{ base: "30px", md: "0" }}
          borderRadius="full"
          boxSize="180px"
          src="/images/profile.jpg"
          alt="Aloysius Tan"
        />
      </Box>
    </Box>
  );
};

export default NameAndImage;
