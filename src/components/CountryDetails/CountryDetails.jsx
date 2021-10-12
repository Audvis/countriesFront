import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getCountryDetails, getCountryActivities } from "../../actions/actions";
import axios from "axios";
import ActivitiesCountry from "../ActivitiesCountry/ActivitiesCountry";
import style from "./CountryDetails.module.css";

const CountryDetails = ({ getCountryDetails, country }) => {
  const [Loading, setLoading] = useState(true);
   const API = 'https://countriesback.herokuapp.com/' 

  let props = useRouteMatch();    
  const key = props.params.id;

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const country = await axios.get(`${API}countries/${key}`);

      getCountryDetails(country.data);
      setLoading(false);
    };

    fetchCountries();
  }, [getCountryDetails, key]);


  function separate(number){
    let str = number.toString()
    let count = str.length % 3;
    let newStr = '';
if(str.length < 4) return str; else
    for (let i = 0; i < str.length; i++) {
       if(i === count ){
          newStr += ',' + str[count];
          count += 3;
       }else newStr += str[i]
    }
  return newStr[0] === ','?newStr.slice(1):newStr
}


  if (Loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.flexOne}>
          <div className={style.contName}>
            <h1 className={style.title}>{country.name}</h1>
          </div>
          <div className={style.contFlagCont}>
          <div className={style.contFlag}>
            <img src={country.flag} alt="flag" className={style.flag} />
          </div>
          </div>
          
        </div>

        <div className={style.flexTwo}>
          <div className={style.containerCont}>
            <div className={style.keyCont}>
            <h3 className={style.key}>{country.key}</h3>
            </div>
         
          <p className={style.p}>Capital <span>:</span> <span className={style.data}> {country.capital}</span></p>
            <p className={style.p}>Continent<span>:</span> <span className={style.data}> {country.continent}</span></p>
            <p className={style.p}>Sub-region<span>:</span><span className={style.data}> {country.subregion}</span></p>
            <p className={style.p}>Area<span>:</span> <span className={style.data}> {separate(country.area)}</span> <span className={style.span}>km2</span></p>
            <p className={style.p}>Population<span>:</span> <span className={style.data}> {separate(country.population)}</span> <span className={style.span}>people</span> </p>
          </div>
          <div className={style.contList}>
            <ActivitiesCountry id={country.key} />
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    country: state.countryDetails,
    activities: state.activitiesCountry,
  };
}

export default connect(mapStateToProps, {
  getCountryDetails,
  getCountryActivities,
})(CountryDetails);
