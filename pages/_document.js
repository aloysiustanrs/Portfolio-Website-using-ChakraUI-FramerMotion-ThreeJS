import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../components/Theme";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1&family=Nunito:wght@300&family=Oxygen+Mono&family=PT+Mono&family=Roboto+Mono&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}>
          <Main />
        </ColorModeScript>
        <NextScript />
      </body>
    </Html>
  );
}
