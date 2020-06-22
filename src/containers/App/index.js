import React from 'react';
import './App.css';


import Header from '../../presenters/Header'
import ActionHub from '../../presenters/ActionHub'
// import CreateNewList from './components/CreateNewList'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
    // <Router>
      <div className="App">
        <Header />
        <ActionHub />
      </div>
    // </Router>
  );


export default App;
