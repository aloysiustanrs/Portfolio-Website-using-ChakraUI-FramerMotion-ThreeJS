import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../components/Theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aloysius Tan</title>
        <meta
          name="description"
          content="Hi! I am Aloysius and this is my portfolio website."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="keywords" content="Aloysius,Tan,Portfolio,Website"></meta>
        <meta name="author" content="Aloysius Tan"></meta>
        <meta
          property="og:image"
          content="https://aloysius.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=384&q=75"
        />
      </Head>

      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
