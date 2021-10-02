import React from "react";
import classes from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>SkyLight</h1>
      </div>
      <div className={classes.body}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Home;
