import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import Layout from "../components/Layout";
import { Flex, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import { Section } from "../components/Section";

export default function Blogs({ allPostsData }) {
  function pointerCursor(e) {
    e.target.style.cursor = "pointer";
  }

  const borderColor = useColorModeValue("gray.400", "#718096");
  const backgroundColor = useColorModeValue("#cbd5e0", "blackAlpha.300");

  return (
    <Layout>
      <Heading mb="50px" letterSpacing="wide">
        Blogs
      </Heading>
      {allPostsData.map(({ id, date, title }, index) => (
        <Section
          delayDuration={
            index >= 10
              ? `${index.toString().slice(0, 1)}.${index.toString().slice(-1)}`
              : `0.${index}`
          }
          key={id}
          hover="1.05"
        >
          <Link href={`/blogs/${id}`} passHref>
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
