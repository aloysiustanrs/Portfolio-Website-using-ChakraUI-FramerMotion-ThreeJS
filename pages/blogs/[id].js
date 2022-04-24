import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../styles/layout";
import { Heading, Divider, useColorModeValue } from "@chakra-ui/react";

export default function Post({ postData }) {
  const color = useColorModeValue("gray.400", "white.100");
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Heading fontSize="24px" mb="15px">
        {postData.title}
      </Heading>
      <small>
        <Date dateString={postData.date} />
      </small>

      <Divider border="solid 1px" borderColor={color} margin="2rem 0" />

      <div
        style={{ padding: "20px" }}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
