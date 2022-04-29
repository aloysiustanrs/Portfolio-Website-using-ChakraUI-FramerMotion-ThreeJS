import React from "react";
import NextLink from "next/link";
import Image from "next/image";
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
  Text,
} from "@chakra-ui/react";

import NavLinks from "./NavLinks";

import { HamburgerIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";
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
          fontSize="25px"
          fontWeight="medium"
          lineHeight="40px"
          letterSpacing="wider"
        >
          <NextLink href="/" passHref>
            <Link scroll={false} style={{ textDecoration: "none" }}>
              <NavLinks>
                <Text mr="10px"> ALOYSIUS</Text>
                <Image src="/logo.png" width={40} height={35} alt="logo" />
              </NavLinks>
            </Link>
          </NextLink>
        </Heading>

        {/* Nav links */}
        <HStack spacing="10px" display={{ base: "none", md: "flex" }}>
          <NextLink href="/projects" passHref>
            <Link
              bgColor={router.pathname == "/projects" && linkColor}
              px="10px"
              py="8px"
              borderRadius="5px"
              userSelect="none"
              style={{ textDecoration: "none" }}
            >
              <NavLinks> Projects</NavLinks>
            </Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link
              bgColor={router.pathname == "/blog" && linkColor}
              px="10px"
              py="8px"
              borderRadius="5px"
              userSelect="none"
              style={{ textDecoration: "none" }}
            >
              <NavLinks>Blog</NavLinks>
            </Link>
          </NextLink>

          <ThemeToggleButton />
        </HStack>

        {/* Hamburger icon */}

        <Box display={{ base: "inline-block", md: "none" }}>
          <ThemeToggleButton display={{ base: "inline-block", md: "none" }} />
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  isActive={isOpen}
                  icon={
                    isOpen ? <CloseIcon fontSize="11px" /> : <HamburgerIcon />
                  }
                  ml={3}
                ></MenuButton>
                <MenuList>
                  <NextLink href="/projects" passHref>
                    <MenuItem as="a">Projects</MenuItem>
                  </NextLink>
                  <NextLink href="/blog" passHref>
                    <MenuItem as="a">Blog</MenuItem>
                  </NextLink>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </Container>
  );
};

export default Nav;
