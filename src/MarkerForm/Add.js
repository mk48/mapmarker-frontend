import React, { useContext } from "react";

//State
import DispatchContext from "./../State/DispatchContext";
import { ADD_NEW_BUTTON_CLICKED } from "./../State/ActionTypes";

// local component
import useStyles from "./Style";

// Material-UI
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

export default function View() {
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const addClick = () => {
    dispatch({ type: ADD_NEW_BUTTON_CLICKED });
  };

  return (
    <Box>
      <Paper className={classes.item}>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.height100}>
          <Grid item>
            <IconButton aria-label="delete" onClick={addClick}>
              <AddIcon style={{ fontSize: 48 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
