import React from "react";
import { connect } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import style from "./CountriesList.module.css";



const CountriesList = ({ stateLoading, currentCountries, countriesActivity }) => {

  if(countriesActivity.length === 0){
    return <h2>Loading...</h2>
  }


  return (
    <div className={style.container}>
      {stateLoading ? (
        <h2>Loading....</h2>
      ) : (
        <ul className={style.ul}>
          {currentCountries.map((country) => (
            <li key={country.key} className={style.li}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

function mapStateToProps(state) {
  return {
    countriesList: state.countriesList,
    stateLoading: state.stateLoading,
    countriesActivity: state.countriesActivity
  };
}

export default connect(mapStateToProps)(CountriesList);
