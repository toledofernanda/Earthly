import React, { Component } from 'react';

class Label extends Component{
  render(){

    /* CSS */
    let label = {
      fontSize: '.7em',
    }

    return (
      <div className="label" key="label" style={label}>
        <span>Label: {this.props.label}</span>
      </div>
    )
  }
}

export default Label;
