import React from "react";

import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={
        colorMode == "dark" ? <FaSun color="black" /> : <FaMoon color="white" />
      }
      backgroundColor={colorMode == "dark" ? "#fbd38d" : "#1a202c"}
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? "Dark" : "Light"}
    </IconButton>
  );
};

export default ThemeToggleButton;
