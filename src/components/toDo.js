import React from 'react';

import { Container, TextField, Button, Grid, Paper } from '@material-ui/core';

import ToDoItem from './toDoItem';

export default function ToDo() {
    return (
        <Container maxWidth="md">
            {/* <Typography variant="body1">To do section</Typography> */}
            <Paper>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs>
                        <TextField id="newToDoInput" label="What's next?" variant="outlined" fullWidth="false" />
                    </Grid>
                    <Grid item xs={0.5}>
                        <Button variant="outlined" size="small">Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper>
                <ToDoItem />
                <ToDoItem />
            </Paper>
        </Container>
    );
};