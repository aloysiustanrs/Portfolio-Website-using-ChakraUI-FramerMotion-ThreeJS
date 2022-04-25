import React from "react";
import { motion } from "framer-motion";

import {
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";

const TagComponent = ({ icon, label }) => {
  const tagColor = useColorModeValue("#CBD5E0", "#373a44");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Tag py="10px" px="20px" width="140px" bgColor={tagColor}>
        <TagLeftIcon as={icon} fontSize="20px"></TagLeftIcon>
        <TagLabel>{label}</TagLabel>
      </Tag>
    </motion.div>
  );
};

export default TagComponent;
