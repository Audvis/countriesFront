import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setFilterBy,
  setFilterOrder,
  setFilterContinent,
  getActivities,
  setFilterActivity,
  setCountriesActivity,
} from "../../actions/actions";
import axios from "axios";
import style from "./Filter.module.css";

const Filters = ({
  setFilterBy,
  setFilterOrder,
  setFilterContinent,
  getActivities,
  activities,
  setFilterActivity,
  setCountriesActivity,
}) => {
  const API = 'https://countriesback.herokuapp.com/' 

  const [Loading, setLoading] = useState(true);
  const [OrderBy, setOrderBy] = useState("name");
  const [AscDes, setAscDes] = useState("asc");

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const countries = await axios.get(`${API}activities`);
      getActivities(countries.data);
      setLoading(false);
    };

    fetchCountries();
  }, [getActivities]);

  if (Loading) {
    return <h2>Loading...</h2>;
  }

  function byPopulation() {
    setFilterBy(false);
    setOrderBy("population");
  }

  function byName() {
    setFilterBy(true);
    setOrderBy("name");
  }

  function asc() {
    setFilterOrder(true);
    setAscDes("asc");
  }

  function des() {
    setFilterOrder(false);
    setAscDes("des");
  }

  const byContinent = (e) => {
    setFilterContinent(e.target.value);
  };

  const byActivities = (e) => {
    console.log(e.target.value);
    setCountriesActivity(e.target.value);
    setFilterActivity(e.target.value);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Filter by</h3>
      <div className={style.subContainer}>
        <label className={style.text}>Activities</label>
        <select className={style.select} name="activities" onChange={byActivities}>
          <option value="All" key="All">
            All
          </option>
          {activities.map((e) => (
            <option value={e.name} key={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className={style.subContainer}>
        <label className={style.text}>Continentes</label>
        <select className={style.select} name="continent" onChange={byContinent}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
      </div>

      <h3 className={style.title}>Order by</h3>
      <div className={style.subContainer}>
        <button
          className={OrderBy === "name" ? style.btnAct : style.btn}
          onClick={(e) => {
            byName();
          }}
        >
          Name
        </button>
        <p className={style.text}>or</p>
        <button
          className={OrderBy === "population" ? style.btnAct : style.btn}
          onClick={(e) => {
            byPopulation();
          }}
        >
          Pop...
        </button>
      </div>

      <div className={style.subContainer}>
        <button
          className={AscDes === "asc" ? style.btnAct : style.btn}
          onClick={(e) => {
            asc();
          }}
        >
          ASC
        </button>
        <p className={style.text}>or</p>
        <button
          className={AscDes === "des" ? style.btnAct : style.btn}
          onClick={(e) => {
            des();
          }}
        >
          DES
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countriesList,
    activities: state.activitiesList,
    stateLoading: state.stateLoading,
    switchSide: state.stateSwitchSideBar,
  };
}
export default connect(mapStateToProps, {
  setFilterBy,
  setFilterOrder,
  setFilterContinent,
  getActivities,
  setFilterActivity,
  setCountriesActivity,
})(Filters);
