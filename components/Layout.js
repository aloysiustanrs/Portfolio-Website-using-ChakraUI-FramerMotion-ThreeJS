import React from "react";
import Nav from "./Nav";
import { Box, Flex } from "@chakra-ui/react";
import VoxelArt from "./VoxelArt";


const Layout = ({ children, display = "block" }) => {
  return (
    <Flex justifyContent="center">
      <Box
        maxW="container.md"
        boxSizing="initial"
        overflowX="hidden"
        display="flex"
        justifyContent="center"
      >
        <Nav />

        <Box maxW="container.sm" overflowX="hidden" px="20px">
          <Box mt="80px" />
          <Box height="300px" display={display}>
            <VoxelArt />
          </Box>
          <Box css={{ backdropFilter: "blur(20px)" }}>{children}</Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
