import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover/Popover';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import
injectTapEventPlugin();

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class App extends Component {
  state = {
    selectedIndex: 0,
  }
  render() {
    return (
      <div>
        <AppBar title = "Deyton's Portfolio" />
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        </Router>
        <h2>My Work</h2>
        <h2>Contact Me</h2>
        <Paper zDepth={5}>
        </Paper>
          <h2>About Me</h2>
        <Paper zDepth={5}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
            label="Email"
            icon={recentsIcon}
            onClick={() => this.select(0)}
            />
            <BottomNavigationItem
            label="Resume"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
            />
            <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}


export default App;
