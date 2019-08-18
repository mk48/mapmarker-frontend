import React, { useContext } from "react";

//State
import StateContext from "./../State/StateContext";
import DispatchContext from "./../State/DispatchContext";
import { NEW_ADDRESS_CHANGE } from "./../State/ActionTypes";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

// local
import useStyles from "./Style";

/*const useStyles = makeStyles(theme => ({
  inputItem: {
    width: 200,
    height: 100,
    padding: theme.spacing(1),
    margin: theme.spacing(0.4)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));*/

export default function Form() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const { isAdding, address, lat, lng } = state.newInput;

  const handleAddressChange = event => {
    dispatch({ type: NEW_ADDRESS_CHANGE, data: event.target.value });
  };

  return (
    <Paper className={classes.inputItem}>
      <form>
        <TextField
          id="address"
          label="Address"
          className={classes.textField}
          value={address}
          onChange={handleAddressChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    </Paper>
  );
}
