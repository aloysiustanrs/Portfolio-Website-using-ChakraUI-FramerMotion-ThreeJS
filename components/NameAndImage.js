import React from "react";
import { Box, Image, Heading, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

  const blinkAnimation = `${blink} 2s 4`;

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      justifyContent="space-between"
      mb={6}
    >
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
            animation={`${typingAnimation} , ${blinkAnimation} , ${hiddenAnimation}`}
            letterSpacing="wide"
            fontWeight="bold"
            fontSize="36px"
          >
            Aloysius Tan&nbsp;
          </Heading>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Heading fontSize="md" letterSpacing="wide" pt={4}>
              Software Engineer
            </Heading>
          </motion.div>
        </Box>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Box display={{ base: "flex", md: "block" }} justifyContent="center">
          <Image
            my={{ base: "30px", md: "0" }}
            borderRadius="full"
            boxSize="180px"
            src="/images/profile.jpg"
            alt="Aloysius Tan"
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default NameAndImage;
