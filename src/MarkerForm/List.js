import React, { useContext } from "react";

//State
import StateContext from "./../State/StateContext";

// local component
import Add from "./Add";
import View from "./View";
import Form from "./Form";
import useStyles from "./Style";

// Material-UI
import Box from "@material-ui/core/Box";

export default function List() {
  const state = useContext(StateContext);
  const classes = useStyles();

  const { showAddButton, markers } = state;

  return (
    <Box className={classes.root} data-testid="list">
      {markers.map((marker, i) => {
        if (marker.mode === "view") {
          return (
            <View
              key={marker.id}
              id={marker.id}
              address={marker.address}
              lat={marker.lat}
              lng={marker.lng}
            />
          );
        } else {
          return (
            <Form
              key={marker.id}
              mode={marker.mode}
              id={marker.id}
              address={marker.addressEdit}
              lat={marker.lat}
              lng={marker.lng}
            />
          );
        }
      })}
      {showAddButton && <Add />}
    </Box>
  );
}
