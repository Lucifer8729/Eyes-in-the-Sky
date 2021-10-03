import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Button } from "@mui/material";

import logo from "../../assets/skywalkers_logo.png";
import logoDark from "../../assets/logo_dark.png";
import styles from "./styles";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const Header = ({ setHomePage }) => {
  const history = useHistory();
  const homePage =
    history.location.pathname === "/" || history.location.pathname === "/about"
      ? true
      : false;
  const primaryColor = homePage ? "#FFFFFF" : "#09333F";

  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
    },
  });

  const handleClick = (path) => {
    history.push(`/${path}`);
    if (
      history.location.pathname === "/" ||
      history.location.pathname === "/about"
    ) {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={styles.headerContainer} spacing={2}>
        <Grid style={styles.imgContainer} item xs={12} md={2}>
          <img
            style={styles.logo}
            src={homePage ? logoDark : logo}
            alt="logo"
            onClick={() => handleClick("")}
          />
        </Grid>
        <Grid item xs={9} md={8}>
          <div style={styles.navbar}>
            <Button
              style={styles.navlinks}
              variant="text"
              size="large"
              onClick={() => handleClick("flood-relief")}
            >
              flood relief
            </Button>
            <Button
              style={styles.navlinks}
              variant="text"
              size="large"
              onClick={() => handleClick("drone")}
            >
              drone
            </Button>
            <Button
              style={styles.navlinks}
              variant="text"
              size="large"
              onClick={() => handleClick("satellite")}
            >
              satellite
            </Button>
          </div>
        </Grid>
        <Grid item xs={3} md={2}>
          <Button
            style={styles.navlinks}
            variant="text"
            size="medium"
            onClick={() => {
              handleClick("about");
            }}
          >
            about
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Header;
