import React, { Component, PropTypes } from 'react';

class Animator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldStep: this.props.stepIndex
    }
  }

  static PropTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    this.props.fadeIn(0);
    this.props.slideDown(0);
  }

  componentWillUpdate() {
    if (this.state.oldStep !== this.props.stepIndex) {
      this.setState({
        oldStep: this.props.stepIndex
      });
    }
  }

  render() {
    const { stepIndex, stepText = [], childElement, children, animStyles,
      containerSlideDownStyle, traverseAllChildren } = this.props;

    return (
      <div className="Animator">
        {stepText[stepIndex]}
        <div style={containerSlideDownStyle}>
          <div style={animStyles}>
            {childElement}
          </div>
        </div>
        {children}
      </div>
    )
  }
};

export default Animator;
