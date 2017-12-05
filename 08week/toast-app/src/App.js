import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Austin from './Austin';
import Dallas from './Dallas';
import NewOrleans from './NewOrleans';


class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Austin & San Antonio Rates</Link></li>
            <li><Link to="/Dallas.js">Dallas & Fort Worth Rates</Link></li>
            <li><Link to="/NewOrleans.js">New Orleans & Baton Rouge Rates</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Austin}/>
          <Route path="/Dallas.js" component={Dallas}/>
          <Route path="/NewOrleans.js" component={NewOrleans}/>
        </div>
      </Router>
    );
  }
}

export default Menu;
