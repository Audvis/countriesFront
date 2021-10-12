import React from "react";
import { connect } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import style from "./SearchDisplay.module.css";

const SearchDisplay = ({ countrySearch }) => {
  if (!Array.isArray(countrySearch)) {
    return (
      <div className={style.display}>
        <h2 className={style.search}>Search a country</h2>
      </div>
    );
  }

   if (countrySearch[0] === false) {
    return (
      <div className={style.displayNot}>
        <h2 className={style.searchNot}>Country not found</h2>;
      </div>
    );
  }

  
  return (
    <div>
      <CountryCard country={countrySearch[0]} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    countrySearch: state.search,
  };
}

export default connect(mapStateToProps)(SearchDisplay);
