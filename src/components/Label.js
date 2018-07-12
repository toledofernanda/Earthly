import React, { Component } from 'react';

class Label extends Component{
  render(){

    /* CSS */
    let label = {
      // textAlign: 'right',
      fontSize: '.6em',
      // paddingRight: '10px'
    }

    return (
      <div className="label" key="label" style={label}>
        <span>Label: {this.props.label}</span>
      </div>
    )
  }
}

export default Label;
