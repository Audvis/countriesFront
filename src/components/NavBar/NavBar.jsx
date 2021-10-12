import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import img from "../../utilities/logoCountries.png";

const NavBar = () => {
  return (
    <div className={style.nav}>
      <Link to={`/`}>
      <img src={img} alt="logo countries" className={style.logo} />
      </Link>
     
      <ul className={style.ul}>
        <li className={style.li}>
          <Link to={`/home`}>Countries</Link>
        </li>
        <li className={style.li}>
          <Link to={`/activities`}>Activities</Link>
        </li>
        <li className={style.li}>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
