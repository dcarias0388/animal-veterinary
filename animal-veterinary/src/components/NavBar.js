import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBg from "../assets/images/header-bg.png";

const Nav = styled.nav`
  text-align: right;
  padding: 5px 100px 0 0;
  max-width: 699px;
`;
const SfMenu = styled.ul`
  min-height: 28px;
  padding: 0;
  margin: 0;
  font-size: 0;
  line-height: 0;
`;
const SfMenuUl = styled.ul`
  position: absolute;
  top: -999em;
  width: 180px;
  left: 0;
  display: none;
  background: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 0 2px #ccc;
`;

const SfMenu2Li = styled.li`
  float: none;
  position: relative;
  margin: 0 0 1px 0;

  &:hover > ul {
    left: 181px;
    top: -10px;
  }
`;

const SfMenuLi = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 41px;

  &:hover {
    ${SfMenuUl} {
      top: 35px;
      left: -55px;
      z-index: 999;
    }
    ${SfMenu2Li} {
      ${SfMenuUl} {
        top: -999rem;
      }
    }
  }
`;
const SfMenuLink = styled(Link)`
  text-decoration: none;
  display: block;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 22px;
  text-transform: lowercase;
  text-decoration: underline;
  color: #c4c4c4;
  padding: 0;
  text-shadow: 1px 1px #fbfbfb;

  &:hover {
    color: #454545;
    text-decoration: none;
  }
`;
const LiCurrent = styled(SfMenuLink)`
  color: #454545;
  text-decoration: none;
`;

const SfMenuLiliA = styled(Link)`
  display: block;
  margin: 0;
  position: relative;
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  color: #454545;
  overflow: hidden;
  padding: 8px 5px 8px 5px;
  text-transform: lowercase;
  font-family: "Open Sans", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const SfMenu3LiA = styled(Link)`
  background: url(${HeaderBg});
`;

const Navbar = () => {
  return (
    <Nav>
      <SfMenu>
        <SfMenuLi>
          <LiCurrent to="index.html">home</LiCurrent>
        </SfMenuLi>
        <SfMenuLi>
          <SfMenuLink to="about.html">nosotros</SfMenuLink>
        </SfMenuLi>
        <SfMenuLi>
          {" "}
          <SfMenuLink to="services.html">servicios</SfMenuLink>
          <SfMenuUl>
            <SfMenu2Li>
              <SfMenuLiliA to="#">Maecenas faucibus</SfMenuLiliA>
            </SfMenu2Li>
            <SfMenu2Li>
              <SfMenuLiliA to="#">Fusce tincidunt</SfMenuLiliA>
            </SfMenu2Li>
            <SfMenu2Li>
              {" "}
              <SfMenuLiliA to="#">tempor eros</SfMenuLiliA>
              <SfMenuUl>
                <SfMenu2Li>
                  <SfMenu3LiA to="#">ut viverra</SfMenu3LiA>
                </SfMenu2Li>
                <SfMenu2Li>
                  <SfMenu3LiA to="#">hendrerit mauris</SfMenu3LiA>
                </SfMenu2Li>
              </SfMenuUl>
            </SfMenu2Li>
            <SfMenuLi>
              <SfMenuLink to="#">mauris ut du</SfMenuLink>
            </SfMenuLi>
          </SfMenuUl>
        </SfMenuLi>
        <SfMenuLi>
          <SfMenuLink to="links.html">enlaces</SfMenuLink>
        </SfMenuLi>
        <SfMenuLi>
          <SfMenuLink to="contacts.html">contactos</SfMenuLink>
        </SfMenuLi>
      </SfMenu>
    </Nav>
  );
};

export default Navbar;
