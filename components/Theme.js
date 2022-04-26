import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f9f6f1", "#1c212b")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "M PLUS Rounded 1c, sans-serif",
  body: "M PLUS Rounded 1c, sans-serif ",
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
