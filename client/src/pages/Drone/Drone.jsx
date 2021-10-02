import React from "react";
import PageImage from "../../components/PageImage/PageImage";

import { Grid } from "@mui/material";
import PageText from "../../components/PageText/PageText";

const Drone = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PageText
          heading="Upload Drone Image"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          from="drone"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PageImage type="drone" />
      </Grid>
    </Grid>
  );
};

export default Drone;
