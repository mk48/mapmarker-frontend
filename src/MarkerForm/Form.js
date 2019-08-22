import React, { useContext } from "react";

//State
import DispatchContext from "./../State/DispatchContext";
import {
  ADDRESS_CHANGE,
  UPDATE_CANCEL_BUTTON_CLICKED,
  ADD_NEW_CANCEL_BUTTON_CLICKED,
  UPDATE_BUTTON_CLICKED,
  SAVE_BUTTON_CLICKED
} from "./../State/ActionTypes";

// Material-UI
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// local
import useStyles from "./Style";

export default function Form({ mode, id, address, lat, lng, errorMessage }) {
  const dispatch = useContext(DispatchContext);

  const classes = useStyles();

  const handleAddressChange = event => {
    dispatch({
      type: ADDRESS_CHANGE,
      data: { id: id, text: event.target.value }
    });
  };

  const handleCancelButtonClick = () => {
    const type = mode === "add" ? ADD_NEW_CANCEL_BUTTON_CLICKED : UPDATE_CANCEL_BUTTON_CLICKED;
    dispatch({
      type: type,
      data: { id: id }
    });
  };

  const handleActionButtonClick = () => {
    const type = mode === "add" ? SAVE_BUTTON_CLICKED : UPDATE_BUTTON_CLICKED;
    dispatch({
      type: type,
      data: { id: id, address: address }
    });
  };

  return (
    <Paper className={classes.inputItem}>
      <form>
        <FormControl className={classes.formControl}>
          <TextField
            id="address"
            label="Address"
            className={classes.textField}
            value={address}
            onChange={handleAddressChange}
            margin="normal"
            variant="outlined"
          />
          {errorMessage && (
            <Typography variant="body2" component="p" className={classes.errorMessage}>
              {errorMessage}
            </Typography>
          )}
          <Button variant="contained" className={classes.button} onClick={handleCancelButtonClick}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleActionButtonClick}>
            {mode === "add" ? "Save" : "Update"}
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
}
