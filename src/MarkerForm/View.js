import React, { useContext } from "react";

// local component
import useStyles from "./Style";

// Material-UI
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export default function View({ id, address, lat, lng }) {
  const classes = useStyles();

  return (
    <Paper className={classes.item}>
      Address: {address} <br />
      Latitude : {lat} <br />
      Longitude : {lng}
    </Paper>
  );
}
