import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f9f6f1", "#1c212b")(props),
    },
    "html, body": {
      color: props.colorMode === "dark" ? "white" : "gray.800",
      lineHeight: "tall",
      overflowX: "hidden",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "monospace, sans-serif",
  body: "Nunito, sans-serif",
};

const breakpoints = {
  none: "0 em",
  xs: "15em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({ styles, config, fonts, breakpoints });

export default theme;
