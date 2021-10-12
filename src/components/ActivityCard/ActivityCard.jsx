import React, { useState } from "react";
import style from "./ActivityCard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ActivityCard = ({ activities }) => {

  const API = 'https://countriesback.herokuapp.com/' ;

  const [Pop, setPop] = useState(false);
  const [ActDel, setActDel] = useState("");

  function del(e) {
    setPop(true);
    setActDel(e.target.value);
  }
  function popYes() {
    deleteActivity(ActDel);
    refreshPage();
  }
  function popNo() {
    setPop(false);
  }
  function refreshPage() {
    window.location.reload();
  }

  const deleteActivity = async (activity) => {
    try {
      await axios.delete(`${API}delete/${activity}`);
    } catch (error) {}
  };

  return (
    <>
      {Pop ? (
        <div className={style.pop}>
          <h3>Delete Activity</h3>
          <p>
            Do you want to <span>delete</span>   the activity <span className={style.span}>{ActDel}</span>
          </p>
          <div>
            <button onClick={popNo} className={style.delBtn}>No</button>
            <button onClick={popYes} className={style.delBtnYes}>Yes</button>
          </div>
        </div>
      ) : (
        <ul className={style.ul}>
          {activities.map((e) => (
            <li key={e.name} className={style.li}>
              <button onClick={del} value={e.name} className={style.delete}>
                X
              </button>
              <div className={style.contTitle}>
                <h4 className={style.title}>{e.name}</h4>
              </div>

              <p className={style.p}>
                Difficulty<span>:</span>
                <span className={style.data}> {e.difficulty}</span>
              </p>
              <p className={style.p}>
                Duration<span>:</span>
                <span className={style.data}> {e.duration}</span>
              </p>
              <p className={style.p}>
                Season<span>:</span>
                <span className={style.data}> {e.season}</span>
              </p>
              <Link to={`/activities/${e.name}`}>
                <button className={style.btn}>Countries</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ActivityCard;
