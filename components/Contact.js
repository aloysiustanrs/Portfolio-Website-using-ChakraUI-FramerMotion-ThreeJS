import React from "react";
import { Heading, Box, Link, Text } from "@chakra-ui/react";
import { Section } from "./Section";
import { Divider, useColorModeValue } from "@chakra-ui/react";

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
        <Heading size="xl" py="30px">
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
      </Box>
      <Divider
        width="70%"
        border="solid 1px"
        borderColor={dividerColor}
        margin="80px auto 100px"
      />
    </Section>
  );
};

export default Contact;
