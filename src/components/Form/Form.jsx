import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getActivities } from "../../actions/actions";
import axios from "axios";
import AddCountries from "../AddCountries/AddCountries";
import style from "./Form.module.css";

const Form = ({ countries, activities, getActivities }) => {
  const API = 'https://countriesback.herokuapp.com/' 

  //*here call the activities data
  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await axios.get(`${API}activities`);
      getActivities(activities.data);
    };
    fetchActivities();
  }, [getActivities]);

  //*____STATES_____________________________________________________________
  //*keep the data to send
  const [activityState, setActivityState] = useState({
    name: "",
    difficulty: "1",
    duration: "",
    season: "summer",
  });

  //*message state
  const [Message, setMessage] = useState(" ");
  const [NewMessage, setNewMessage] = useState(" ");

  //*add country state
  const [AddCountry, setAddCountry] = useState(false);

  //*___________________________________________________________________________

  //*POST the data
  const submitActivity = async (e) => {
    e.preventDefault();

    const activityFind = activities.find((e) => e.name === activityState.name);
    if (activityFind !== undefined) {
      setMessage("the activity already exists");
      return;
    } else {
      setAddCountry(true);
    }
  };

  const actualizarActivityState = (e) => {
    if (e.target.value === "") {
      setMessage("fill the field Activity");
    } else if (e.target.value.match(/^[0-9]+$/)) {
      setMessage("Not number allow in Activity");
    } else setMessage("");
    setActivityState({
      ...activityState,
      [e.target.name]: e.target.value,
    });
    return;
  };

  const actualizarDurationState = (e) => {
    if (e.target.value === "") {
      setNewMessage("fill the field Duration");
    } else if (!e.target.value.match(/^[0-9]+\s+[a-zA-Z]+$/)) {
      //? /^[a-zA-Z]+$/
      setNewMessage("write the rigth format");
    } else setNewMessage("");
    setActivityState({
      ...activityState,
      [e.target.name]: e.target.value,
    });
    return;
  };

  const actualizarState = (e) => {
    setActivityState({
      ...activityState,
      [e.target.name]: e.target.value,
    });
  };

  const { name, difficulty, duration, season } = activityState;
 
  return (
    <>
      {Message || NewMessage ? (
        <div>
          <h3 className={style.alert}>{Message}</h3>
          <h3 className={style.alert}>{NewMessage}</h3>
        </div>
      ) : (
        <div></div>
      )}
      {AddCountry ? (
        <AddCountries activity={activityState} />
      ) : (
  
        <form onSubmit={submitActivity} className={style.form}>
           <h3 className={style.title}>Create New Activity</h3>
          <div className={style.middle}>
            <label  className={style.label}>Activity</label>
            <input
              type="text"
              name="name"
              placeholder="walk, climb"
              onChange={actualizarActivityState}
              value={name}
            />
          </div>
          <div className={style.middle}>
            <label className={style.label}>Difficulty</label>
            <select
              name="difficulty"
              onChange={actualizarState}
              value={difficulty}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={style.middle}>
            <label  className={style.label}>Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="5 hours..."
              onChange={actualizarDurationState}
              value={duration}
            />
          </div>
          <div className={style.middleLast}>
            <label  className={style.label}>Season</label>
            <select name="season" onChange={actualizarState} value={season}>
              <option value="summer">summer</option>
              <option value="autumn">autumn</option>
              <option value="winter">winter</option>
              <option value="spring">spring</option>
            </select>
          </div>

          {Message || NewMessage ? (
            <div></div>
          ) : (
            <button type="submit" className={style.btn}>Create</button>
          )}
        </form>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countriesList,
    activities: state.activitiesList,
  };
}
export default connect(mapStateToProps, { getActivities })(Form);
