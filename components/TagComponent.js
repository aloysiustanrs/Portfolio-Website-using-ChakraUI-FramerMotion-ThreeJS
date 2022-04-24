import React from "react";
import { motion } from "framer-motion";

import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

const TagComponent = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Tag py="10px" px="20px" width="140px">
        <TagLeftIcon as={props.icon} fontSize="20px"></TagLeftIcon>
        <TagLabel>{props.label}</TagLabel>
      </Tag>
    </motion.div>
  );
};

export default TagComponent;
