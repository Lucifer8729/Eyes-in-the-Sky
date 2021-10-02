import React from "react";

import satellite from "../../assets/satellite.png";
import drone from "../../assets/drone.png";

import classes from "./styles.module.css";

const PageImage = (props) => {
  return (
    <div className={classes["page-img-box"]}>
      <img
        className={classes["page-img"]}
        src={props.type === "satellite" ? satellite : drone}
        alt="page"
      />
    </div>
  );
};

export default PageImage;
