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
        <AnimForm nextBtnText="Next" prevBtnText="Previous" finishBtnText="Save" type="fadeIn">
          <div>
            <label>Email</label>
            <input type="email" placeholder="me@me.com" />
          </div>
          <div>
              <label>Password</label>
              <input type="password" placeholder="" />
          </div>
          <div>
            Is that correct?
          </div>
        </AnimForm>



        <AnimForm nextBtnText="Next" prevBtnText="Previous" finishBtnText="Save" type="slideDown">
          <div>
            <label>Email</label>
            <input type="email" placeholder="me@me.com" />
          </div>
          <div>
              <label>Password</label>
              <input type="password" placeholder="" />
          </div>
          <div>
            Is that correct?
          </div>
        </AnimForm>
      </div>
    )
  }
};

ReactDOM.render(<ReactAnimatedForms />, document.getElementById('react-dom-hook'))
