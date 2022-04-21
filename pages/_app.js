import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../styles/theme";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
