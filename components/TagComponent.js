import React from "react";
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

const TagComponent = (props) => {
  return (
    <Tag py="10px" px="20px">
      <TagLeftIcon as={props.icon} fontSize="20px"></TagLeftIcon>
      <TagLabel>{props.label}</TagLabel>
    </Tag>
  );
};

export default TagComponent;
