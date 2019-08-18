import React, { useContext } from "react";

//State
import StateContext from "./../State/StateContext";

// local component
import NewInput from "./New";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper
  },

  inputItem: {
    width: 200,
    height: 100,
    padding: theme.spacing(1),
    margin: theme.spacing(0.4)
  }
}));

export default function Input() {
  const state = useContext(StateContext);
  const classes = useStyles();

  const { markers } = state;

  return (
    <Box className={classes.root}>
      {markers.map(marker => (
        <Paper key={marker.id} className={classes.inputItem}>
          Address: {marker.address} <br />
          Latitude : {marker.lat} <br />
          Longitude : {marker.lng}
        </Paper>
      ))}
      <NewInput />
    </Box>
  );
}
