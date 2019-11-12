import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import ToDo from './components/toDo';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={ToDo} />
        <Route exact path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
