import React, { Component, PropTypes } from 'react';

class Animator extends Component {
  constructor(props) {
    super(props)
  }

  static PropTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    this.props.fadeIn(0);
    this.props.slideDown(0);
  }

  render() {
    const { step, stepText = [], childElement, children, animStyles, containerSlideDownStyle } = this.props;

    return (
      <div className="Animator">
        {stepText[step]}
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
