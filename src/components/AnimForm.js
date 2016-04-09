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
      this.setState({ stepIndex: nextStep });
      this[this.props.type](0);
    }
  }

  prevStep(e) {
    e.preventDefault();
    if (this.state.stepIndex > 0) {
      const prevStep = this.state.stepIndex - 1;
      this.setState({ stepIndex: prevStep });
      this[this.props.type](0);
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

  fadeIn = (opacity = 0) => {
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
        this.fadeIn(newOpactity);
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

  slideDown = (height = 0, amount = 100) => {
    if (height <= amount) {
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
        this.slideDown(newHeight);
      }, 15); // 15 is a 300ms fade in from 0 to 1 opacity
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
          step={this.state.stepIndex}
          stepText={stepText}
          childElement={this.props.children[this.state.stepIndex]}
          fadeIn={this.fadeIn}
          slideDown={this.slideDown}
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
