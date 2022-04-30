import React from "react";
import styled from "@emotion/styled";

const NavBox = styled.span`
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;

  // img {
  //   transition: 100ms ease;
  // }
  // &:hover img {
  //   transform: rotate(20deg);
  // }

  &::before {
    position: absolute;
    content: "";
    width: 0%;
    height: 2px;
    bottom: 3px;
    left: 0;
    border-radius: 0;
    background-color: #9e9e9e;
    visibility: hidden;

    transition: 120ms ease-in-out;
  }
  &:hover::before {
    visibility: visible;
    width: 100%;
  }
`;

const NavLinks = ({ children }) => {
  return <NavBox>{children}</NavBox>;
};

export default NavLinks;
