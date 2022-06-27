import React from "react";

const SubHeader = ({ children }) => {
  return (
    <>
      <br />
      <h3 style={{ fontSize: "24px", letterSpacing: 1.2 }}>{children}</h3>
      <br />
    </>
  );
};

export default SubHeader;
