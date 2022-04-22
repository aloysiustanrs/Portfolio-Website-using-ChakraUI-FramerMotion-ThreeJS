import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectItem = (props) => {
  const color = useColorModeValue("gray.400", "white.100");
  return (
    <Box display="flex" justifyContent="center">
      <Box display={{ base: "flex", md: "block" }} flexDirection="column">
        <Image
          width={{ base: "300px", md: "full" }}
          height={{ base: "200px", md: "150px" }}
          objectFit="cover"
          borderRadius="8%"
          src={`/images/${props.image}.jpg`}
          alt="Aloysius Tan"
        />

        <Box width={{ base: "300px", md: "full" }}>
          <Heading py={{ base: "20px", md: "10px" }} size="md">
            {props.heading}
          </Heading>
          <Text fontSize="14px">{props.text}</Text>
          <Divider
            width="70%"
            border="solid 1px"
            borderColor={color}
            display={{ base: "block", md: "none" }}
            margin="3rem auto 1rem"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;
