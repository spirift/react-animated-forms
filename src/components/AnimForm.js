import React, { Component, PropTypes } from 'react';

import Fader from './Fader';

class AnimForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepIndex: 0,
      style: {
        opacity: 0
      }
    }
  }

  static PropTypes = {
    children: PropTypes.node
  }

  nextStep() {
    const limit = this.props.children.length - 1;
    if (this.state.stepIndex < limit) {
      this.setState({ style: { opacity: 0 } });
      const nextStep = this.state.stepIndex + 1;
      this.setState({ stepIndex: nextStep });
      this.fadeIn(0);
    }
  }

  prevStep() {
    if (this.state.stepIndex > 0) {
      this.setState({ style: { opacity: 0 } });
      const prevStep = this.state.stepIndex - 1;
      this.setState({ stepIndex: prevStep });
      this.fadeIn(0);
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
        style: {
          opacity: newOpactity
        }
      });
      setTimeout(() => {
        this.fadeIn(newOpactity);
      }, 15); // 15 is a 300ms fade in from 0 to 1 opacity
    } else {
      this.setState({
        style: {
          opacity: 1
        }
      });
    }
  }

  componentDidMount() {
    this.fadeIn(0);
  }

  render() {
    const { children, nextBtnText, prevBtnText, finishBtnText } = this.props;

    return (
      <div className="AnimForm">
        {this.state.stepIndex}
          <Fader childElement={this.props.children[this.state.stepIndex]} style={this.state.style}>
          </Fader>

        {this.showNextButton(nextBtnText, finishBtnText)}
        {this.showPreviousButton(prevBtnText)}
      </div>
    )
  }
};

export default AnimForm;
