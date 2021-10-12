import React from "react";
import Form from "../Form/Form";
import style from "./CreateActivity.module.css";

const CreateActivity = () => {
  return (
    <div className={style.container}>
      <div className={style.contForm}>
        <Form />
      </div>
    </div>
  );
};

export default CreateActivity;
