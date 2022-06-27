import React from "react";

const TextWithLink = ({ text, link }) => {
  return (
    <u>
      <a href={`${link}`}>{text}</a>
    </u>
  );
};

export default TextWithLink;
