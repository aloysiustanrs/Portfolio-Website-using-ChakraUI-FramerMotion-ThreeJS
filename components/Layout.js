import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Nav from "./Nav";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

const layout = ({ children }) => {
  return (
    <Container maxW="container.md" boxSizing="initial" overflowX="hidden">
      <Nav />

      <Container maxW="container.sm" overflowX="hidden">
        <Box height="300px" mt="40px">
          <Canvas>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[0, 3, 2]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </Box>
        <Box css={{ backdropFilter: "blur(20px)" }}>{children}</Box>
      </Container>
    </Container>
  );
};

export default layout;
