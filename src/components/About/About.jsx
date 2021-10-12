import React from "react";
import style from "./About.module.css";
import img from "../../utilities/yo.jpg";
import HENRY from "../../utilities/logoHenry.png";

const About = () => {
  return (
    <div className={style.container}>
        <div className={style.containerTitle}>
        <h1 className={style.title}>About</h1>
        </div>
     
      <div className={style.subContainerOne}>
        <img src={img} alt="imgGp" className={style.img} />
        <div className={style.infoContainer}>
          <h2 className={style.name}>Gerardo Pedraza</h2>
          <p>
          Henry's student as a full stack web developer in javascript.
          </p>
          <p> This is the individual project required to pass Henry's bootcamp.The project is created with Postgres, sequelize, node, react and redux.</p>
        </div>
      </div>
      <a href="https://www.soyhenry.com/" target="_blank" rel="noreferrer" className={style.link}>
          <p className={style.soy}>soyhenry.com</p>
      <img src={HENRY} alt="Henrys logo" className={style.henry}/>
      </a>
     
    </div>
  );
};

export default About;
