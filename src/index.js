import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnimForm from './components/AnimForm';

class ReactAnimatedForms extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ReactAnimatedForms">
        <AnimForm>
          <div>hi</div>
          <div>by</div>
          <div>foo</div>
        </AnimForm>
      </div>
    )
  }
};

ReactDOM.render(<ReactAnimatedForms />, document.getElementById('react-dom-hook'))
