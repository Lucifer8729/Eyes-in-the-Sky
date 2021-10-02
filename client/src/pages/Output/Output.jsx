import React from "react";
import { useHistory } from "react-router";

import {
  Grid,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import Legends from "../../components/Legends/Legends";

import classes from "./styles.module.css";

const Output = () => {
  const history = useHistory();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#09333F",
      },
    },
  });

  const handleClick = (path) => {
    console.log(history);
    history.push(`/${path}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.outputBody}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <div className={classes.inputDiv}>
              <Typography mt={1} variant="h5" display="block" gutterBottom>
                INPUT
              </Typography>
              <Box
                mb={1}
                sx={{
                  border: "4px solid #09333F",
                  width: "100%",
                  height: "55vh",
                  bgcolor: "#E2E2E2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {
                  <Box sx={{ width: "40%" }}>
                    <LinearProgress />
                  </Box>
                }
              </Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="outlined"
                      {...bindTrigger(popupState)}
                      startIcon={<AddIcon />}
                    >
                      Add new Image
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                        onClick={() => {
                          handleClick("satellite");
                          popupState.close();
                        }}
                      >
                        Satellite
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClick("drone");
                          popupState.close();
                        }}
                      >
                        Drone
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.inputDiv}>
              <Typography mt={1} variant="h5" display="block" gutterBottom>
                OUTPUT
              </Typography>
              <Box
                mb={1}
                sx={{
                  border: "4px solid #09333F",
                  width: "100%",
                  height: "55vh",
                  bgcolor: "#E2E2E2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {<CircularProgress />}
              </Box>
              <Button variant="contained" startIcon={<CloudDownloadIcon />}>
                Download
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <Legends />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Output;
