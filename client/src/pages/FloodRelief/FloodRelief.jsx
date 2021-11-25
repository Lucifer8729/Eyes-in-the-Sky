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
          body="The different types of land cover can be managed or used quite differently. This can be determined by analyzing satellite imagery."
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
