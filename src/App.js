import React, { useReducer } from "react";

// State
import reducer from "./State/reducer";
import { initialState } from "./State/initialState";
import DispatchContext from "./State/DispatchContext";

// components
import Map from "./Map";
import Input from "./Input";

// Material-UI
import Grid from "@material-ui/core/Grid";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
         <Map /> 
        </Grid>
        <Grid item xs={6}>
          <Input Markers={state.markers} />
        </Grid>
      </Grid>
    </DispatchContext.Provider>
  );
}

export default App;
