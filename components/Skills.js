import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaAndroid,
} from "react-icons/fa";
import { SiJavascript, SiCss3 } from "react-icons/si";

import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";

import TagComponent from "./TagComponent";

const Skills = () => {
  const [visible, setVisible] = useState(3);
  const loadMoreButton = useRef(null);
  const buttonColor = useColorModeValue("#CBD5E0", "#373a44");

  const loadMoreItems = () => {
    setVisible((prevValue) => prevValue + (badgeItems.length - 3));
    loadMoreButton.current.style.display = "none";
  };

  const badgeItems = [
    <TagComponent key="python" icon={FaPython} label="Python" />,
    <TagComponent key="java" icon={FaJava} label="Java" />,
    <TagComponent key="js" icon={SiJavascript} label="JavaScript" />,
    <TagComponent key="html" icon={FaHtml5} label="HTML" />,
    <TagComponent key="css" icon={SiCss3} label="CSS" />,
    <TagComponent key="bootstrap" icon={FaBootstrap} label="Bootstrap" />,
    <TagComponent key="react" icon={FaReact} label="React" />,
    <TagComponent key="android" icon={FaAndroid} label="App Dev" />,
  ];

  return (
    <Section delayDuration={0.4}>
      <Box paddingY="20px">
        <Heading size="xl" py="30px">
          Skills
        </Heading>
        <Grid
          templateColumns={{
            md: "repeat(4, 140px )",
            sm: "repeat(3, 140px )",
            xs: "repeat(2, 140px )",
          }}
          gap={3}
        >
          {badgeItems.slice(0, visible).map((item) => item)}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              py="10px"
              px="20px"
              ref={loadMoreButton}
              onClick={loadMoreItems}
              display="flex"
              alignContent="center"
              width="140px"
              bgColor={buttonColor}
            >
              <Text>+&nbsp;Load more</Text>
            </Button>
          </motion.div>
        </Grid>
      </Box>
    </Section>
  );
};

export default Skills;
