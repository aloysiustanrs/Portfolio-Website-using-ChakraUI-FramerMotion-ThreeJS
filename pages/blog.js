import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../styles/Layout";
import { Flex, Text, Heading, Box, useColorModeValue } from "@chakra-ui/react";

export default function Blogs({ allPostsData }) {
  function pointerCursor(e) {
    e.target.style.cursor = "pointer";
  }

  const color = useColorModeValue("gray.400", "white.100");

  return (
    <Layout>
      <Heading mb="50px">Blogs</Heading>
      {allPostsData.map(({ id, date, title }) => (
        <Link href={`/blog/${id}`} key={id} passHref>
          <Box
            onMouseOver={pointerCursor}
            border="solid 1px "
            borderColor={color}
            borderRadius="5px"
            mb="30px"
            w="full"
          >
            <Flex
              flexDirection="column"
              w="full"
              textAlign="left"
              py="20px"
              px="25px"
            >
              <Text pb="10px">{title}</Text>
              <small>
                <Date dateString={date} />
              </small>
            </Flex>
          </Box>
        </Link>
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
