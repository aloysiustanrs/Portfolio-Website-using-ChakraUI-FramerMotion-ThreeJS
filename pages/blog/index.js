import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Box, Text, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Section } from "../../components/Section";

const Blog = ({ posts }) => {
  function pointerCursor(e) {
    e.target.style.cursor = "pointer";
  }

  const borderColor = useColorModeValue("gray.400", "#71809626");
  const backgroundColor = useColorModeValue("#cbd5e0", "171c24");
  return (
    <Layout>
      <Heading mb="50px" letterSpacing="wide">
        Blog
      </Heading>
      {posts.map((post, index) => (
        <Section key={index} delayDuration={`0.${index}`} hover="1.05">
          <Link href={"/blog/" + post.slug} passHref>
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              mb="40px"
              onMouseOver={pointerCursor}
              border="solid 1px"
              borderColor={borderColor}
              borderRadius="10px"
              backgroundColor={backgroundColor}
              py="20px"
              px="25px"
            >
              <Box width="full" pr="30px" mb={{ base: "20px", md: "0" }}>
                <Heading fontFamily="Nunito" fontSize="20px">
                  {post.frontMatter.title}
                </Heading>
                <Text fontSize="14px" py="15px">
                  {post.frontMatter.description}
                </Text>
                <Text>
                  <small>{post.frontMatter.date}</small>
                </Text>
              </Box>
              <Image
                src={`/blog-images${post.frontMatter.thumbnailUrl}`}
                alt="thumbnail"
                width={350}
                height={200}
                objectFit="cover"
                style={{ borderRadius: "5px" }}
              />
            </Box>
          </Link>
        </Section>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
