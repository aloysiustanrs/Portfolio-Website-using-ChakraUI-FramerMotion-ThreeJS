import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{children}</h1>
      <br />
    </>
  );
};

export default Header;
