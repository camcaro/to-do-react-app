import React from 'react';
import { connect } from 'react-redux';

import { Container, TextField, Button, Grid, Paper } from '@material-ui/core';

import ToDoItem from './toDoItem';
import { addNewToDoItem } from '../redux/actions';

class ToDoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // toDoList: props.toDoArray //Change name to toDoArray (same name as state and declare as empty for initial state)
            toDoArray: [],
            newToDo: ""
        }
        // console.log(this.state);
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            newToDo: event.target.value
        });
    }

    handleAdd = () => {
        console.log(this.state.toDoArray);
        return this.state.addNewItem; //(this.state.newToDo)
    }


    // async getToDosFromServer() {
    //     try {
    //         const rawData = await fetch('https://todo-checkpoint-api.herokuapp.com/api/todos/carlos')
    //         .then();

    //     }
    //     catch {

    //     }
    // }

    // componentDidMount() {

    // }

    render() {
        return (
            <Container maxWidth="md">
                {/* <Typography variant="body1">To do section</Typography> */}
                <Paper>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={11}>
                            <TextField id="newToDoInput" onChange={this.handleChange} label="What's next?" variant="outlined" fullWidth={true} />
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={this.handleAdd} variant="outlined" size="small">Add</Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper>
                    {// Map all items in to do list to individual <ToDoItem>
                        this.state.toDoArray
                            .map(element => <ToDoItem todo={element} />)
                    }
                </Paper>
            </Container>
        );
    }
};

function mapStateToProps(state) {
    return {
        toDoArray: state.reducerNewToDo // add specific props from state.reducer.x
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewItem: (newToDo) => dispatch(addNewToDoItem(newToDo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
