import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
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
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  const router = useRouter();

  const linkColor = useColorModeValue("#cbd5e0", "#373a44");
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
        <HStack spacing="10px" display={{ base: "none", md: "flex" }}>
          <NextLink href="/" passHref>
            <Link
              bgColor={router.pathname == "/" && linkColor}
              px="10px"
              py="8px"
              borderRadius="5px"
              userSelect="none"
            >
              Home
            </Link>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Link
              bgColor={router.pathname == "/projects" && linkColor}
              px="10px"
              py="8px"
              borderRadius="5px"
              userSelect="none"
            >
              Projects
            </Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link
              bgColor={router.pathname == "/blog" && linkColor}
              px="10px"
              py="8px"
              borderRadius="5px"
              userSelect="none"
            >
              Blog
            </Link>
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
