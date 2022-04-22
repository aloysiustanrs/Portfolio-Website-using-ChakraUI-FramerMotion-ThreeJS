import React from "react";
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

import { HamburgerIcon } from "@chakra-ui/icons";

import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  return (
    <Container
      m={0}
      px={5}
      py={5}
      position="fixed"
      maxW="container.md"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
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
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Link>Projects</Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link>Blog</Link>
          </NextLink>

          <ThemeToggleButton />
        </HStack>

        {/* Hamburger icon */}

        <Box display={{ base: "inline-block", md: "none" }}>
          <ThemeToggleButton display={{ base: "inline-block", md: "none" }} />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
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
  );
};

export default Nav;
