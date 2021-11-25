import React from "react";
import classes from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>Eyes In The Sky</h1>
      </div>
      <div className={classes.body}>
        <p>
          We have created an accessible and robust website made using ReactJS
          that will perform land cover segmentation and classification from
          satellites and drones at the click of a button powered by powerful
          deep learning models served by FastAPI.
        </p>
      </div>
    </div>
  );
};

export default Home;
