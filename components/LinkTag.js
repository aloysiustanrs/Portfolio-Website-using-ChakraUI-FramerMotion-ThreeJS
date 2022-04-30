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
  const tagColor = useColorModeValue("white", "black");
  const tagBgColorOnHover = useColorModeValue("black", "white");

  return (
    <NextLink href={href} passHref>
      <Link style={{ textDecoration: "none" }}>
        <Tag
          py="10px"
          px="20px"
          width="140px"
          display="flex"
          alignItems="flex-end"
          css={`
            & {
              transition: 150ms ease-in-out;

              background: -webkit-linear-gradient(
                0deg,
                transparent 50%,
                ${tagBgColorOnHover} 50%
              );
              background-size: 18rem 3rem;
              border: 1px solid #40444f;
            }
            &:hover {
              background-position: 9rem 0;
              color: ${tagColor};
            }
          `}
        >
          <TagLeftIcon as={icon} fontSize="20px"></TagLeftIcon>
          <TagLabel >
            {label}
          </TagLabel>
        </Tag>
      </Link>
    </NextLink>
  );
};

export default LinkTag;
