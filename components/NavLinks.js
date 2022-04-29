import React from "react";
import styled from "@emotion/styled";

// For hover style of nav links

const NavBox = styled.span`
  color: white !important;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-bottom: 6px;

  display: inline-flex;
  align-items: center;

  img {
    opacity: 0;
    transition: 100ms ease;
  }
  &:hover img {
    opacity: 1;
    transform: rotate(20deg);
  }

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
