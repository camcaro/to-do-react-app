import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Appbar from '@material-ui/core/AppBar';

export default function Header() {
    return (
        <div>
            <Typography variant="h2" gutterBottom={true}>To Do React App</Typography>
            <Appbar position="static">
                <Typography variant="h6">
                    <Link to="/">To Do</Link>
                    <Link to="/search">Search</Link>
                </Typography>
            </Appbar>
        </div>
    );
}
