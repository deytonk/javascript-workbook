import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 1000,
  margin: 'auto',
  textAlign: 'center',
};

class NewOrleans extends Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <img src=""/>
          <h2>New Orleans & Baton Rouge Menu</h2>
          <div>
            <h3>DJ Services</h3>
            <h3>Ultimate Photo Booth</h3>
            <h3>Photography</h3>
            <h3>Videography</h3>
            <h3>Coordination</h3>
          </div>
        </Paper>
      </div>
    );
  }
}

export default NewOrleans;
