import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Start extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Start</div>
  }
};

ReactDOM.render(<Start />, document.getElementById('react-dom-hook'))
