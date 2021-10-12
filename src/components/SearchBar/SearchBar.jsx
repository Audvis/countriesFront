import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <SearchDisplay />
      </div>
      <div className={style.input}></div>
      <SearchInput />
    </div>
  );
};

export default SearchBar;
