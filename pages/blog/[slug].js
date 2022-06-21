import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Layout from "../../components/Layout";
import {
  Heading,
  Text,
  Box,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const components = { SyntaxHighlighter, Image, Header, Carousel };

const PostPage = ({ frontMatter: { title, date }, mdxSource, content }) => {
  const readingTime = require("reading-time");
  const stats = readingTime(content);

  const color = useColorModeValue("gray.400", "white.100");

  return (
    <Layout display="none">
      <Box mt="150px">
        <Heading size="xl" letterSpacing="wide">
          {title}
        </Heading>
        <Text my="10px" fontSize="md">
          {date}
        </Text>
        <Text fontSize="sm">{stats.text}</Text>
        <Divider border="solid 1px" borderColor={color} my="50px" />
      </Box>

      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      content,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
