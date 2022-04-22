import React, { useState, useRef } from "react";

// import { PythonIcon } from "programming-languages-logos/src/swift/swift.svg";
// import swift from "programming-languages-logos/src/swift/swift.svg";
// import Java from "../public/icons/java.svg";
// import Javascript from "../public/icons/javascript.svg";
// import HTML from "../public/icons/html.svg";
// import CSS from "../public/icons/css3.svg";
// import Bootstrap from "../public/icons/bootstrap.svg";
// import ReactIcon from "../public/icons/react.svg";
// import Android from "../public/icons/android.svg";

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
  Tag,
  HStack,
  Grid,
  GridItem,
  TagLabel,
  TagLeftIcon,
  Icon,
} from "@chakra-ui/react";

import TagComponent from "./TagComponent";

const Skills = () => {
  const [visible, setVisible] = useState(3);
  const loadMoreButton = useRef(null);

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
    <Box>
      <Heading py="30px">Skills</Heading>
      <Grid
        templateColumns={{
          md: "repeat(4, 140px )",
          sm: "repeat(3, 140px )",
          xs: "repeat(2, 140px )",
        }}
        gap={3}
      >
        {badgeItems.slice(0, visible).map((item) => item)}
        <Button
          py="10px"
          px="20px"
          ref={loadMoreButton}
          onClick={loadMoreItems}
          display="flex"
          alignContent="center"
        >
          <Text>+&nbsp;Load more</Text>
        </Button>
      </Grid>
    </Box>
  );
};

export default Skills;
