import React, { useReducer } from "react";

// State
import reducer from "./State/reducer";
import reducerMiddleware from "./State/reducerMiddleware";
import { initialState } from "./State/initialState";
import DispatchContext from "./State/DispatchContext";
import StateContext from "./State/StateContext";

// components
import Map from "./Map";
import List from "./MarkerForm/List";

// Material-UI
import Grid from "@material-ui/core/Grid";

function App() {
  const [state, dispatchBase] = useReducer(reducer, initialState);
  const dispatch = reducerMiddleware(dispatchBase); // reducer middleware to handle API requests

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {/*<Map /> */}
          </Grid>
          <Grid item xs={6}>
            <List />
          </Grid>
        </Grid>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
