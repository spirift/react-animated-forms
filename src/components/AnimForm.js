import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Animator from './Animator';

class AnimForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepIndex: 0,
      styles: {
        fadeIn: {
          opacity: 0,
        },
        slideDown: {
          height: 0,
          overflow: 'hidden'
        }
      }
    }
  }

  nextStep(e) {
    e.preventDefault();
    const limit = this.props.children.length - 1;
    if (this.state.stepIndex < limit) {
      const nextStep = this.state.stepIndex + 1;
      this[this.props.type](nextStep);
    }
  }

  prevStep(e) {
    e.preventDefault();
    if (this.state.stepIndex > 0) {
      const prevStep = this.state.stepIndex - 1;
      this[this.props.type](prevStep);
    }
  }

  showNextButton(nextBtnText, finishBtnText) {
    if (this.state.stepIndex === this.props.children.length - 1) {
      return <button onClick={this.nextStep.bind(this)}>{finishBtnText}</button>;
    } else {
      return <button onClick={this.nextStep.bind(this)}>{nextBtnText}</button>;
    }
  }

  showPreviousButton(prevBtnText, finishBtnText) {
    if (this.state.stepIndex > 0) {
      return <button onClick={this.prevStep.bind(this)}>{prevBtnText}</button>;
    } else {
      return null;
    }
  }

  fadeIn(newStep) {
    this._fadeOut(1);
    setTimeout(() => {
      this.setState({ stepIndex: newStep });
      this._fadeIn(0);
    }, 400); // 300 for the fade out and 100 extra for cleaner animation
  }

  _fadeOut = (opacity = 1) => {
    if (opacity >= 0) {
      const newOpactity = opacity - 0.05;
      this.setState({
        styles: {
          fadeIn: {
            opacity: newOpactity
          }
        }
      });
      setTimeout(() => {
        this._fadeOut(newOpactity);
      }, 15); // 15 is a 300ms fade in from 0 to 1 opacity
    }
  }

  _fadeIn = (opacity = 0) => {
    if (opacity <= 1) {
      const newOpactity = opacity + 0.05;
      this.setState({
        styles: {
          fadeIn: {
            opacity: newOpactity
          }
        }
      });
      setTimeout(() => {
        this._fadeIn(newOpactity);
      }, 15); // 15 is a 300ms fade in from 0 to 1 opacity
    } else {
      this.setState({
        styles: {
          fadeIn: {
            opacity: 1
          }
        }
      });
    }
  }

  slideDown(newStep) {
    this._slideUp(100);
    setTimeout(() => {
      this.setState({ stepIndex: newStep });
      this._slideDown(0);
    }, 850); // 300 for the fade out and 100 extra for cleaner animation
  }

  _slideDown = (height = 0) => {
    if (height <= 100) {
      const newHeight = height + 5;
      this.setState({
        styles: {
          slideDown: {
            height: `${newHeight}%`,
            overflow: 'hidden'
          }
        }
      });
      setTimeout(() => {
        this._slideDown(newHeight);
      }, 20); // 20 is a 400ms fade in from 0 to 1 opacity
    } else {
      this.setState({
        styles: {
          slideDown: {
            height: `100%`,
            overflow: 'hidden'
          }
        }
      });
    }
  }

  _slideUp = (height = 100) => {
    if (height >= 0) {
      const newHeight = height - 5;
      this.setState({
        styles: {
          slideDown: {
            height: `${newHeight}%`,
            overflow: 'hidden'
          }
        }
      });
      setTimeout(() => {
        this._slideUp(newHeight);
      }, 20); // 20 is a 400ms fade in from 0 to 1 opacity
    } else {
      this.setState({
        styles: {
          slideDown: {
            height: `0%`,
            overflow: 'hidden'
          }
        }
      });
    }
  }

  static PropTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    this.setState({
      containerSlideDownStyle: {
        height: ReactDOM.findDOMNode(this).offsetHeight
      }
    });
  }

  render() {
    const { children, nextBtnText, prevBtnText, finishBtnText, type, stepText } = this.props;

    return (
      <form className="AnimForm">

        <Animator
          stepIndex={this.state.stepIndex}
          stepText={stepText}
          childElement={this.props.children[this.state.stepIndex]}
          fadeIn={this._fadeIn}
          slideDown={this._slideDown}
          animStyles={this.state.styles[type]}
          containerSlideDownStyle={type === 'slideDown' ? this.state.containerSlideDownStyle : {}}
        >

          {this.showNextButton(nextBtnText, finishBtnText)}
          {this.showPreviousButton(prevBtnText)}
        </Animator>
      </form>
    );
  }
};

export default AnimForm;
