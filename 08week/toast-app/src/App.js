import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Services from './Services'
import Austin from './Austin';
import Dallas from './Dallas';
import NewOrleans from './NewOrleans';

const style = {
  marginLeft: 100
};

class Toast extends Component {
  state = {
    open: false,
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Link to="/"><RaisedButton onClick={this.handleTouchTap} label="Toast Entertainment Rates and Packages" fullWidth={true} primary={true} /></Link>
          <Popover
            style={style}
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem><Link to="/Austin.js"><RaisedButton label="Austin & San Antonio Rates" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/Dallas.js"><RaisedButton label="Dallas & Fort Worth Rates" fullWidth={true} primary={true} /></Link></MenuItem>
              <MenuItem><Link to="/NewOrleans.js"><RaisedButton label="New Orleans & Baton Rouge Rates" fullWidth={true} primary={true} /></Link></MenuItem>
            </Menu>
          </Popover>

          <Route exact path="/" component={Services}/>
          <Route exact path="/Austin.js" component={Austin}/>
          <Route path="/Dallas.js" component={Dallas}/>
          <Route path="/NewOrleans.js" component={NewOrleans}/>
        </div>
      </Router>
    );
  }
}

export default Toast;
