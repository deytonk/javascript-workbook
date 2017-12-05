import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';

import Services from './Services'
import Austin from './Austin';
import Dallas from './Dallas';
import NewOrleans from './NewOrleans';


class Menu extends Component {
  render() {
    return (
      <Router>
        <div>

          <h3><Link to="/"><RaisedButton label="Services" primary={true} /></Link></h3>
          <h4><Link to="/Austin.js"><RaisedButton label="Austin & San Antonio Rates" primary={true} /></Link></h4>
          <h4><Link to="/Dallas.js"><RaisedButton label="Dallas & Fort Worth Rates" primary={true} /></Link></h4>
          <h4><Link to="/NewOrleans.js"><RaisedButton label="New Orleans & Baton Rouge Rates" primary={true} /></Link></h4>

          <hr/>

          <Route exact path="/" component={Services}/>
          <Route exact path="/Austin.js" component={Austin}/>
          <Route path="/Dallas.js" component={Dallas}/>
          <Route path="/NewOrleans.js" component={NewOrleans}/>
        </div>
      </Router>
    );
  }
}

export default Menu;
