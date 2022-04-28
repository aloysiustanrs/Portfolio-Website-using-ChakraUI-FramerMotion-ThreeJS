import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Nav from "./Nav";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

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
            <Canvas camera={{ position: [-20, 2, 5], fov: 20 }}>
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={0.8} />
              <directionalLight position={[0, 3, 2]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </Box>
          <Box css={{ backdropFilter: "blur(20px)" }}>{children}</Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
