import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../styles/layout";
import { Flex, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import { Section } from "../components/Section";

export default function Blogs({ allPostsData }) {
  function pointerCursor(e) {
    e.target.style.cursor = "pointer";
  }

  const borderColor = useColorModeValue("gray.400", "#718096");
  const backgroundColor = useColorModeValue("gray.400", "blackAlpha.300");

  return (
    <Layout>
      <Heading mb="50px">Blogs</Heading>
      {allPostsData.map(({ id, date, title }, index) => (
        <Section
          delayDuration={
            index >= 10
              ? `${index.toString().slice(0, 1)}.${index.toString().slice(-1)}`
              : `0.${index}`
          }
          key={id}
          hover="1.1"
        >
          <Link href={`/blog/${id}`} passHref>
            <Box
              onMouseOver={pointerCursor}
              border="solid 1px"
              borderColor={borderColor}
              borderRadius="5px"
              mb="30px"
              w="full"
              backgroundColor={backgroundColor}
            >
              <Flex
                flexDirection="column"
                w="full"
                textAlign="left"
                py="20px"
                px="25px"
              >
                <Heading pb="10px" fontSize="18px" fontWeight="semibold">
                  {title}
                </Heading>
                <small>
                  <Date dateString={date} />
                </small>
              </Flex>
            </Box>
          </Link>
        </Section>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}