import React, { useEffect, useState } from "react";
import axios from "axios";
import { getActivities } from "../../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ActivitiesList.module.css";
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivitiesList = ({ getActivities, activities }) => {
  const API = 'https://countriesback.herokuapp.com/' 
  // const API = 'http://localhost:3001/' 
  const [Loading, setLoading] = useState(true);

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

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.contTitle}>
          <h1 className={style.title}>Activities</h1>
        </div>
        <Link to="createActivity">
          <div className={style.add}>
           <div className={style.contAddTitle}>
           <h2 className={style.titleAdd}>Add Activity</h2>
           </div>
             
          
            <span className={style.icon}>
              <i className="fas fa-plus-circle"></i>
            </span>
          </div>
        </Link>
      </div>
      <ActivityCard activities={activities} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activities: state.activitiesList,
  };
}

export default connect(mapStateToProps, { getActivities })(ActivitiesList);
