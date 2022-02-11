import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerSearch from "../assets/images/header-search.png";
import searchSubmit from "../assets/images/header-search-submit.gif";

const SearchForm = styled.form`
  display: inline-block;
  position: relative;
  background: url(${headerSearch}) no-repeat 0 0;
  width: 271px;
  height: 31px;
  margin: 6px 0 0 0;
`;

const SearchFormInput = styled.input`
  outline: none;
  margin: 0 0 0 15px;
  color: #c2c2c2;
  border: none;
  font-size: 12px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  background: none;
  text-transform: uppercase;
  height: 18px;
  padding: 7px 0 5px;
  width: 225px;
`;

const SearchFormSubmit = styled(Link)`
  position: absolute;
  display: block;
  width: 20px;
  height: 23px;
  background: url(${searchSubmit}) no-repeat 0 0;
  right: 6px;
  top: 4px;

  &:hover {
    background: url(${searchSubmit}) no-repeat 0 bottom;
  }
`;

const FormSearch = () => {
  const [searchValue, setSearchValue] = useState("search");

  const handleBlur = (e) => {
    let valueFormBlur = e.target.value;
    if (valueFormBlur === "") setSearchValue("search");
  };

  const handleFocus = (e) => {
    let valueFormFocus = e.target.value;
    if (valueFormFocus === "search") setSearchValue("");
  };

  const handleChange = (e) => {
    if (e.target.value === "") setSearchValue("search");
    else setSearchValue(e.target.value);
  };

  return (
    <SearchForm action="#" method="post">
      <SearchFormInput
        type="text"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        defaultValue="search"
        name="search"
        value={searchValue}
      />
      <SearchFormSubmit to="#" />
    </SearchForm>
  );
};

export default FormSearch;
