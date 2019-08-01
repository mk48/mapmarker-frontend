import React from 'react';

// components
import Map from "./Map";
import Input from "./Input";

// Material-UI
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Map/>
      </Grid>
      <Grid item xs={6}>
        <Input/>
      </Grid>
    </Grid>
  );
}

export default App;
