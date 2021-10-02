import React from "react";
import ImgUpload from "../ImgUpload/ImgUpload";
import classes from "./styles.module.css";

const PageText = (props) => {
  return (
    <div className={classes.contentbox}>
      <div className={classes.header}>
        <h2>{props.heading}</h2>
        <p>{props.body}</p>
      </div>
      <ImgUpload from={props.from} />
    </div>
  );
};

export default PageText;
