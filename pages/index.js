import Nav from "../components/Nav";
import About from "../components/About";
import NameAndImage from "../components/NameAndImage";
import Skills from "../components/Skills";
import Layout from "../styles/Layout";

import { Box, Container } from "@chakra-ui/react";

export default function Index() {
  return (
    <Layout>
      <NameAndImage />
      <About />
      <Skills />
    </Layout>
  );
}
