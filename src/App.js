import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Header from './components/header';
import ToDoContainer from './components/toDoContainer';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={ToDoContainer} />
          <Route exact path="/search" component={Search} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
