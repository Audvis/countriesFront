import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { connect } from "react-redux";
import axios from "axios";
import style from "./AddCountries.module.css";
import { Link } from "react-router-dom";

const AddCountries = ({ activity, countrySearch }) => {
  const API = 'https://countriesback.herokuapp.com/' 

  const [Countries, setCountries] = useState([]);
  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState("");

  const arrCountries = () => {
    if (Countries.length !== 0) {
      const search = Countries.filter((e) => e[0].key === countrySearch[0].key);
      if (search.length !== 0) {
        setError("this country is rigth now in the list");
        return;
      } else setCountries([...Countries, countrySearch]);
      setError("");
    }
    setCountries([...Countries, countrySearch]);
  };

  const fetchPost = async (e) => {
    await fetchPostActivity();
    await fetchPostCountries();
    setSuccess(true);
  };

  const fetchPostActivity = async (e) => {
    if (activity.key === false) {
      return;
    } else
      try {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(activity),
        };
        let res = await fetch(`${API}activity`, config);
        let json = await res.json();
        console.log(json);
      } catch (err) {}
  };

  const fetchPostCountries = async () => {
   
    try {
      Countries.map(async (e) => {
        await axios.post(`${API}${activity.name}/${e[0].name}`);
      });
    } catch (error) {}
  };

  //*refresh function
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      {Success ? (
        <div>
          <h3 className={style.successMes}>Successfully created activity</h3>
          {activity.key === false ? (
            <div className={style.flexOne}>
              {/* <Link to="/home">
                <button className={style.btn}>Home</button>
              </Link> */}

              <Link to="/activities">
                <button className={style.btn}>Activities</button>
              </Link>
              <button className={style.btn} onClick={refreshPage}>
                Activity
              </button>
            </div>
          ) : (
            <div className={style.flexOne}>

               {/* <Link to="/home">
                <button className={style.btn}>Home</button>
              </Link> */}
              <button className={style.btn} onClick={refreshPage}>
                Create New Activity
              </button>
              <Link to="/activities">
                <button className={style.btn}>Activities</button>
              </Link>
             
            </div>
          )}
        </div>
      ) : (
        <h3 className={style.title}>
          Choose a country to the activity {activity.name}
        </h3>
      )}

      <div className={style.container}>
        <div>
          <SearchBar />
          {!countrySearch[0] || Success ? (
            <div></div>
          ) : (
            <button onClick={arrCountries} className={style.btnAdd}>
              Add
            </button>
          )}
        </div>

        <div>
          <h4 className={style.error}>{Error}</h4>
          {Countries.length === 0 ? (
            <div className={style.ul}></div>
          ) : (
            <ul className={style.ul}>
              <h3 className={style.countriesAdd}>Countries to add</h3>
              {Countries.map((e) => (
                <li key={e[0].key} className={style.li}>
                  <h4>{e[0].name}</h4>
                  <img
                    src={e[0].flag}
                    alt="country-flag"
                    className={style.flag}
                  />
                </li>
              ))}
            </ul>
          )}
          {Countries.length === 0 || Success ? (
            <div></div>
          ) : (
            activity.key === false?<button onClick={fetchPost} className={style.btnCreate}>
            Add Countries
          </button>:
            <button onClick={fetchPost} className={style.btnCreate}>
              Create Activity
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    countrySearch: state.search,
  };
}
export default connect(mapStateToProps)(AddCountries);
