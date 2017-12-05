import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 1000,
  margin: 'auto',
  textAlign: 'center',
};

class Austin extends Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <h2>Austin & San Antonio Menu</h2>
        </Paper>
      </div>
    );
  }
}

export default Austin;
