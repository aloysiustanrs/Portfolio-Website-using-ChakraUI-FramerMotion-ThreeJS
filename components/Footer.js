import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" marginBottom="40px">
      &copy; {new Date().getFullYear()} Aloysius Tan. All Rights Reserved.
    </Box>
  );
};

export default Footer;
