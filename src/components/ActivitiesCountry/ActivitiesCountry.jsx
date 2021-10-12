import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getCountryActivities } from "../../actions/actions";
import style from './ActivitiesCountry.module.css'

const ActivitiesCountry = ({
  getCountryActivities,
  activities,
  id,
}) => {
  const API = 'https://countriesback.herokuapp.com/' 

  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      const countryActivities = await axios.get(
        `${API}${id}/activities`
      );
      getCountryActivities(countryActivities.data);
      setLoading(false);
    };
    fetchActivities();
  }, [getCountryActivities,id]);

  if (Loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div className={style.contTitle}>
       <h3 className={style.title}>Activities</h3>
    </div>
      
    
     <ul className={style.ul}>
     <li className={style.titles} key='title'>
      <p>Activity</p>
       <p>Difficulty</p>
       <p>Duration</p>
       <p>Season</p>
      </li>
     {activities.map((e) => (
        <li key={e.activity_country.activityId}  className={style.li}>
          <h4>{e.name}</h4>
          <p>{e.difficulty}</p>
          <p>{e.duration}</p>
          <p>{e.season}</p>
        </li>
      ))}
     </ul>
   
    
     
    </>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.loadingActivities,
    activities: state.activitiesCountry,
  };
}

export default connect(mapStateToProps, {
  getCountryActivities
})(ActivitiesCountry);
