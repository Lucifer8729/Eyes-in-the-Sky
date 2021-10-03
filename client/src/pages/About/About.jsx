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
              Our Team developed a land cover annotation and segmentation Web-App that efficiently automates the aforementioned tedious job which can be useful in Future land development projects. Our web app enables the end user to upload a satellite or drone image and presents a segmented output along with the sample ingressed which the user could download for future references. We use Deep Learning and Machine Learning Methodologies for  automated Land annotation ,segmentation and deployed the API's in an easy , interactive , smooth operative website. We also endeavored to conceptualize an Use Case prototype which could segment out flooded planes from satellite image which could be invaluably helpful in disaster management.
            </p>
            <p>
              Members of our team has worked together to assemble this website. Aakash Gupta, Rishy Parasar and Ved Prakash Dubey managed the data handling and visualization aspect of the project. Ved Prakash Dubey has worked on the Drone segmentation.Rishy Parasar has worked on the Satellite segmentation and Aakash Gupta has worked on the use case Prototype. Aniket Agarwal, Saurav Kumar and Tanvi Gupta has worked on the front end and UI/UX development of the webpage. They have worked on creating responsive website wireframe and made a user friendly website. All the Team Member together ensured easy, smooth operational and interactive website.
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
