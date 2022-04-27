import React from "react";
import {
  Heading,
  Box,
  Link,
  Text,
  Flex,
  Divider,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { Section } from "./Section";
import LinkTag from "./LinkTag";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  const dividerColor = useColorModeValue("gray.400", "white.100");
  return (
    <Section delayDuration="0.6">
      <Divider
        width="70%"
        border="solid 1px"
        borderColor={dividerColor}
        margin="150px auto 100px"
      />
      <Box paddingBottom="90px" textAlign="center">
        <Heading size="xl" py="30px" letterSpacing="wide">
          Contact Me
        </Heading>
        <Box>
          <Text fontSize="md" marginY="30px">
            Feel free to reach out to me at any time!
          </Text>
          <Text fontSize="lg" paddingY="10px">
            Aloysius Tan
          </Text>
          <Link
            id="email"
            onClick={() =>
              navigator.clipboard.writeText("aloysiustanrs@gmail.com")
            }
          >
            aloysiustanrs@gmail.com
          </Link>
        </Box>

        <HStack
          justifyContent={{ xs: "center", base: "flex-start" }}
          marginTop="80px"
          overflowX="auto"
        >
          <LinkTag
            label="Linkedin"
            icon={FaLinkedin}
            href="https://www.linkedin.com/in/aloysiustanrs/"
          />
          <LinkTag
            label="Twitter"
            icon={FaTwitter}
            href="https://twitter.com/aloysiustanrs"
          />
          <LinkTag
            label="Github"
            icon={FaGithub}
            href="https://github.com/aloysiustanrs"
          />
        </HStack>
      </Box>
      <Divider
        width="70%"
        border="solid 1px"
        borderColor={dividerColor}
        margin="60px auto 100px"
      />
    </Section>
  );
};

export default Contact;
