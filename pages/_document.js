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
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://languages.abranhe.com/logos.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aloysius Tan</title>
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
