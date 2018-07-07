import React, { Component } from 'react';

class Source extends Component{
  render(){

    /* CSS */
    let source = {
      textAlign: 'right',
      fontSize: '.6em',
      paddingRight: '10px'
    }

    return (
      <div className="source" key="source" style={source}>
        <span>Source: {this.props.source}</span>
      </div>
    )
  }
}

export default Source;
