import Nav from "../components/Nav";
import Home from "../components/Home";
import NameAndImage from "../components/NameAndImage";

import { Box, Container } from "@chakra-ui/react";

export default function Index() {
  return (
    <Container maxW="container.md" boxSizing="initial">
      <Nav />
      <Box pt="160px" />

      <Container maxW="container.sm">
        <NameAndImage />
        <Home />
      </Container>
    </Container>
  );
}
