import React from "react";
import img from "../../utilities/landing.webp";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.contTitle}>
          <h1 className={style.h1}>Countries App</h1>
        </div>
        <div className={style.contContImg}>
          <div className={style.contImg}>
            <img src={img} className={style.img} alt="countries_img" />
          </div>
        </div>

        <Link  to="/home">
          <button className={style.btn}>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
