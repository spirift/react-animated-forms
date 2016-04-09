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
    const { childElement, children, style } = this.props;

    return (
      <div className="Animator">
        <div style={style}>
          {childElement}
        </div>
        {children}
      </div>
    )
  }
};

export default Animator;
