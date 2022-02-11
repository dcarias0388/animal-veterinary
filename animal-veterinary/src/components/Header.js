import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo2.png";
import FormSearch from "./FormSearch";
import Navbar from "./NavBar";

const HeaderContainer = styled.header`
  position: relative;
  z-index: 2;
`;

const HeaderInner = styled.div`
  width: 950px;
  margin: 0 auto;
  padding: 0 0 10px 0;
`;

const HeaderLogo = styled.h1`
  display: inline-block;
  padding: 0 !important;
`;

const HeaderLink = styled(Link)`
  position: relative;
  background: url(${logo}) no-repeat 0 0;
  height: 141px;
  width: 151px;
  overflow: hidden;
  text-indent: -99em;
  display: block;
`;

const HeaderMeta = styled.div`
  text-align: right;
  padding: 31px 0 20px;
`;

const HeaderMetaCol = styled.div`
  display: inline-block;
  width: 235px;
  text-align: right;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  line-height: 21px;
  color: #454545;
  text-transform: uppercase;
  text-shadow: 1px 1px #fbfbfb;
`;

const HeaderMetaPhone = styled.span`
  display: inline-block;
  font-size: 18px;
  line-height: 22px;
  color: #ec8f23;
  margin: -3px 0 0 0;
  text-align: left;
`;

// .header-meta * {
// 	text-align:left;
// }

function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo>
          <HeaderLink to="/">Animal Vet</HeaderLink>
        </HeaderLogo>
        <div className="fright">
          <HeaderMeta>
            <FormSearch />
            <HeaderMetaCol>
              {" "}
              ¿Tienes un problema con tu mascota?
              <br />
              Llámenos ahora: <br />
              <HeaderMetaPhone> +53 58101236 </HeaderMetaPhone>{" "}
            </HeaderMetaCol>
          </HeaderMeta>
          <Navbar />
        </div>
        <div className="clear" />
      </HeaderInner>
      <div className="slider-container">
        <div className="mp-slider">
          <ul className="items">
            <li>
              <img src="images/slide-1.jpg" alt="" />
            </li>
            <li>
              <img src="images/slide-2.jpg" alt="" />
            </li>
            <li>
              <img src="images/slide-3.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
