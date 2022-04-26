import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import {
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";

const LinkTag = ({ icon, label, href }) => {
  const tagColor = useColorModeValue("#CBD5E0", "#373a44");
  return (
    <NextLink href={href} passHref>
      <Link textDecoration="none ">
        <Tag py="10px" px="20px" width="140px" bgColor={tagColor}>
          <TagLeftIcon as={icon} fontSize="20px"></TagLeftIcon>
          <TagLabel>{label}</TagLabel>
        </Tag>
      </Link>
    </NextLink>
  );
};

export default LinkTag;
