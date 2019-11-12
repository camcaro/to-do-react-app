import React from 'react';

import { Typography, Button, Grid, Checkbox } from '@material-ui/core';


export default function ToDoItem() {
  return (
    <Grid container spacing={0} alignItems="center">
      <Grid item>
        <Checkbox color="primary" />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">To do number 1 (placeholder)</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">Button 3</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">Button 2</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" size="small">Button 1</Button>
      </Grid>
    </Grid>
  );
}
