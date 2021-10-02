import React from "react";
import { Grid } from "@mui/material";

import aboutImg from "../../assets/about.jpeg";

import classes from "./styles.module.css";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <div className={classes.text}>
          <div className={classes.writeup}>
          </div>
          <div className={classes.body}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cup
              idatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.odo consequat. Duis aute
              rure dolor inreprehenderit in voluptate.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className={classes.image}>
          <img src={aboutImg} alt="About Img" />
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
