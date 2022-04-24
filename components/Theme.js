import { extendTheme } from "@chakra-ui/react";

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

const theme = extendTheme({ config, fonts, breakpoints });

export default theme;
