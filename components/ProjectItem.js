import {
  Box,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Section } from "../components/Section";
import Link from "next/link";

const ProjectItem = ({ delayDuration, image, heading, text, link }) => {
  const color = useColorModeValue("gray.400", "white.100");
  return (
    <Section delayDuration={delayDuration}>
      <Flex justifyContent="center">
        <Link href={link} passHref>
          <Box
            w={{ none: "280px", md: "100%" }}
            textAlign="center"
            cursor="pointer"
          >
            <Image
              h="180px"
              w="full"
              objectFit="cover"
              src={`project-images/${image}`}
              alt={heading}
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
              borderRadius="10px"
            />
            <Text
              mt={4}
              mb={2}
              fontSize={18}
              fontWeight="bold"
              letterSpacing="wider"
            >
              {heading}
            </Text>
            <Text fontSize={14}>{text}</Text>
            <Divider
              width="70%"
              border="solid 1px"
              borderColor={color}
              display={{ base: "block", md: "none" }}
              margin="2rem auto -1rem"
            />
          </Box>
        </Link>
      </Flex>
    </Section>
  );
};

export default ProjectItem;
