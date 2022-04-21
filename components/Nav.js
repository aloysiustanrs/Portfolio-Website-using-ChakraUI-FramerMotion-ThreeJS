import React, { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      position="fixed"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container p={3} maxW="container.md">
        <Flex justifyContent={"space-between"} alignItems="center">
          {/* Nav Brand */}
          <Heading
            fontSize={"3xl"}
            fontWeight={"bold"}
            letterSpacing="wider"
            bgGradient={"linear(to-r,red.300,red.500,red.300)"}
            bgClip="text"
          >
            ALOYSIUS
          </Heading>

          {/* Nav links */}
          <HStack spacing="24px" display={{ base: "none", md: "block" }}>
            <NextLink href="/home" passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/home" passHref>
              <Link>Projects</Link>
            </NextLink>
            <NextLink href="/home" passHref>
              <Link>Blog</Link>
            </NextLink>

            <ThemeToggleButton />
          </HStack>

          {/* Hamburger icon */}

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <ThemeToggleButton display={{ base: "inline-block", md: "none" }} />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  open ? <CloseIcon fontSize={"10px"} /> : <HamburgerIcon />
                }
                onClick={() => {
                  setOpen(!open);
                }}
                ml={3}
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as="a">Home</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as="a">Projects</MenuItem>
                </NextLink>
                <NextLink href="/blog" passHref>
                  <MenuItem as="a">Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
