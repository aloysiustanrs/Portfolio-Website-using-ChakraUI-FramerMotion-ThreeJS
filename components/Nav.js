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
                <Text
                  fontFamily="'M PLUS Rounded 1c', sans-serif"
                  fontSize="20px"
                  letterSpacing="tighter"
                  css={`
                    & {
                      color: transparent;
                      background: linear-gradient(
                        90deg,
                        rgb(30, 30, 30) 0%,
                        rgb(51, 51, 51) 10%,
                        rgb(102, 102, 102) 20%,
                        rgb(153, 153, 153) 30%,
                        rgb(204, 204, 204) 40%,
                        rgb(240, 240, 240) 50%,
                        rgb(204, 204, 204) 60%,
                        rgb(153, 153, 153) 70%,
                        rgb(102, 102, 102) 80%,
                        rgb(51, 51, 51) 90%,
                        rgb(30, 30, 30) 100%
                      );
                      background-size: 200% auto;
                      -webkit-background-clip: text;
                      background-clip: text;
                      animation: move 4s linear infinite, hide 4s 4s infinite,
                        unhide 4s 4s infinite;
                    }

                    @keyframes move {
                      to {
                        background-position: -200% 0;
                      }
                    }

                    @keyframes hide {
                      0% {
                        opacity: 1;
                      }
                      0.01% {
                        opacity: 0;
                      }
                      100% {
                        opacity: 0;
                      }
                    }

                    @keyframes unhide {
                      0% {
                        opacity: 0;
                      }
                      0.01% {
                        opacity: 1;
                      }
                      100% {
                        opacity: 1;
                      }
                    }
                  `}
                >
                  Aloysius Tan
                </Text>
                {/* <Image src="/logo.png" width={40} height={35} alt="logo" /> */}
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
                  <NextLink href="/" passHref>
                    <MenuItem as="a">About</MenuItem>
                  </NextLink>
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
