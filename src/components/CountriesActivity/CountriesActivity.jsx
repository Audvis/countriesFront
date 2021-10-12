import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import { getCountriesActivity } from "../../actions/actions";
import style from "./CountriesActivity.module.css";
import AddCountries from "../AddCountries/AddCountries";

const CountriesActivity = ({ getCountriesActivity, countries }) => {

  const API = 'https://countriesback.herokuapp.com/' 

  const [Loading, setLoading] = useState(true);
  const [Switch, setSwitch] = useState(false);
  const [Pop, setPop] = useState(false);
  const [CountryDel, setCountryDel] = useState("");
 


  let props = useRouteMatch();
  const name = props.params.name;

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const countries = await axios.get(
        `${API}${name}/countries`
      );
      getCountriesActivity(countries.data);
      setLoading(false);
    };
    fetchCountries();
  }, [getCountriesActivity, name]);

 

  function btn() {
    setSwitch(true);
  }

  //*delete___________________________
  function del(e) {
    
    setPop(true);
    setCountryDel(e.target.value);
  }
  function popYes() {
    deleteActivity(CountryDel);
    refreshPage();
  }
  function popNo() {
    setPop(false);
  }
  function refreshPage() {
    window.location.reload();
  }

  const deleteActivity = async (CountryDel) => {
    try {
      await axios.delete(`${API}delete/${name}/${CountryDel}`);
    } catch (error) {}
  };
  

  const obj = { name: name, key: false };
 
  if (Loading) {
    return <h2>Loading...</h2>;
  }



  return (
    
    <div className={style.container}>

      {

      Pop ? (
        <div className={style.pop}>
          <h3>Delete Country in Activity</h3>
          <p>
            Do you want to <span>delete</span>   the country <span className={style.span}>{CountryDel}</span> from <span className={style.span}>{name}</span>
          </p>
          <div>
            <button onClick={popNo} className={style.delBtn}>No</button>
            <button onClick={popYes} className={style.delBtnYes}>Yes</button>
          </div>
        </div>
      ) :
      
      Switch ? (
        <AddCountries activity={obj} countries={countries} />
      ) : (
        <div className={style.subContainer}>
          <div>
            <h1 className={style.contTitle}>Countries for {name} </h1>
          </div>
          <div className={style.contUl}>
          <ul className={style.ul}>
            {countries.map((e) => (
              <li key={e.key} className={style.li}>
                <h4 className={style.country}>{e.name}</h4>
                <img src={e.flag} alt="flag country" className={style.flag}/>
               { countries.length === 1 ?<div></div>:
                <button  onClick={del} value={e.name} className={style.delete}>X</button>}
              </li>
            ))}
          </ul>
          </div>
         
          <button onClick={btn} className={style.btn}>
            Add
          </button>
        </div>
      )}
    </div>



  );
};

function mapStateToProps(state) {
  return {
    countries: state.countriesActivity,
  };
}

export default connect(mapStateToProps, { getCountriesActivity })(
  CountriesActivity
);
