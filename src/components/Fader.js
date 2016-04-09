import React, { Component, PropTypes } from 'react';

class Fader extends Component {
  constructor(props) {
    super(props)
  }

  static PropTypes = {
    children: PropTypes.node
  }

  render() {
    const { childElement, style } = this.props;

    return (
      <div className="Fader" style={style}>
        {childElement}
      </div>
    )
  }
};

export default Fader;
