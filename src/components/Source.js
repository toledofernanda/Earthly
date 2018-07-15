import React, { Component } from 'react';

class Source extends Component{
  render(){

    /* CSS */
    let source = {
      fontSize: '.7em',
    }

    return (
      <div className="source" key="source" style={source}>
        <span>Source: {this.props.source}</span>
      </div>
    )
  }
}

export default Source;
