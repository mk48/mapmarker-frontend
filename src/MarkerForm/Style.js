// Material-UI
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper
  },

  item: {
    width: 200,
    height: 100,
    padding: theme.spacing(1),
    margin: theme.spacing(0.4)
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },

  height100: {
    height: "100%"
  }
}));