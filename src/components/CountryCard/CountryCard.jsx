import React from "react";
import style from "./CountryCard.module.css";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className={style.card}>
      <div className={style.contImg}>
        <img src={country.flag} className={style.flag} alt="" />
      </div>
      <div className={style.contName}>
        <h4 className={style.name}>{country.name}</h4>
      </div>
      <div className={style.contContinent}>
        <h5 className={style.continent}>{country.continent}</h5>
      </div>

      <Link to={`/country/${country.key}`}>
        <button className={style.btn}>Info</button>
      </Link>
    </div>
  );
};

export default CountryCard;
