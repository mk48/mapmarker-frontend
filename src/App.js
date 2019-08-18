import React, { useReducer } from "react";

// State
import reducer from "./State/reducer";
import { initialState } from "./State/initialState";
import DispatchContext from "./State/DispatchContext";
import StateContext from "./State/StateContext";

// components
import Map from "./Map";
import Input from "./Input";

// Material-UI
import Grid from "@material-ui/core/Grid";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {/*<Map /> */}
          </Grid>
          <Grid item xs={6}>
            <Input />
          </Grid>
        </Grid>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
