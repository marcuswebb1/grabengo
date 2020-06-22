import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import CreateNewList from './presenters/createNewList'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
    <Router basename="/grabengo">
        <Route exact path="/" component={App}/>
        <Route path="/createNewList" component={CreateNewList}/>
    </Router>
,document.getElementById('root'));
