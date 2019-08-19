import React, { useContext } from "react";

//State
import { EDIT_BUTTON_CLICKED } from "./../State/ActionTypes";
import { DELETE_BUTTON_CLICKED } from "./../State/ActionTypes";
import DispatchContext from "./../State/DispatchContext";

// local component
import useStyles from "./Style";

// Material-UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function View({ id, address, lat, lng }) {
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();

  const handleEditButtonClick = () => {
    dispatch({
      type: EDIT_BUTTON_CLICKED,
      data: { id: id }
    });
  };

  const handleDeleteButtonClick = () => {
    dispatch({
      type: DELETE_BUTTON_CLICKED,
      data: { id: id }
    });
  };

  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {address}
        </Typography>
        <Typography color="textSecondary">
          {lat}, {lng}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" onClick={handleEditButtonClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteButtonClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
