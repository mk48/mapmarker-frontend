import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';

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

export default function Input({ Markers }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {Markers.map(marker => (
        <Paper key={marker.id} className={classes.inputItem}>
          Latitude : {marker.lat}
          Longitude : {marker.lng}
        </Paper>
      ))}
    </Box>
  );
}
