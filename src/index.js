import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnimForm from './components/AnimForm';
import { animFormChangeHandler } from './utils';

class ReactAnimatedForms extends Component {
  constructor(props) {
    super(props)
  }

  submitHandler(e) {
    e.preventDefault();

    // TODO this is where you do something with the form data.
    console.log(`e.target: `, window.AF);
  }

  render() {
    return (
      <div className="ReactAnimatedForms">
        <AnimForm nextBtnText="Next" prevBtnText="Previous" finishBtnText="Save"
          type="fadeIn" stepText={['email', 'password', 'confirm']}
          onSubmit={this.submitHandler}>
          <div key={1}>
            <label>Email</label>
            <input type="email" placeholder="me@me.com" name="email" onChange={animFormChangeHandler} />
          </div>
          <div key={2}>
              <label>Password</label>
              <input type="password" placeholder="" name="password" onChange={animFormChangeHandler} />
          </div>
          <div key={3}>
            Is that correct?
          </div>
        </AnimForm>



        <AnimForm nextBtnText="Next" prevBtnText="Previous" finishBtnText="Save"
          type="slideDown" stepText={['email', 'password', 'confirm']}>
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
