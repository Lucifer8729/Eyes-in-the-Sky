import React from "react";

import PageImage from "../../components/PageImage/PageImage";

import { Grid } from "@mui/material";
import PageText from "../../components/PageText/PageText";

// import classes from "./styles.module.css";

const Satellite = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PageText
          heading="Upload Image"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          from="flood-relief"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PageImage type="satellite" />
      </Grid>
    </Grid>
  );
};

export default Satellite;
