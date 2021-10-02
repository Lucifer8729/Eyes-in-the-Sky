import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

const Legends = () => {
  const entries = [
    ["#FF0505", "Industrial Land"],
    ["#FA0096", "Urban Residential"],
    ["#C89696", "Rural Residential"],
    ["#FA9696", "Traffic Land"],
    ["#12CB12", "Paddy Field"],
    ["#96FA00", "Irrigated Land"],
    ["#96C896", "Dry Cropland"],
    ["#C800C8", "Garden Land"],
    ["#9600FA", "Arbor Forest"],
    ["#9696FA", "Shrub Land"],
    ["#FAC800", "Natural Meadow"],
    ["#C8C800", "Artificial Meadow"],
    ["#0000C8", "River"],
    ["#0096C8", "Lake"],
    ["#00C8FA", "Pond"],
  ];

  return (
    <Box
      mt={-5}
      sx={{
        border: "1px solid #09333F",
        width: "100%",
        bgcolor: "#FFFFFF",
        borderRadius: "5px",
      }}
    >
      <List dense={true}>
        {entries.map((entry, i) => (
          <ListItemButton key={i}>
            <ListItemAvatar>
              <Avatar sx={{ width: 24, height: 24, bgcolor: `${entry[0]}` }}>
                <Typography></Typography>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={entry[1]} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Legends;
