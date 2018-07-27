import React, { Component } from 'react';

class Source extends Component{
  render(){

    /* CSS */
    let source = {
      fontSize: '.7em',
    }

    return (
      <div className="source" key="source" style={source}>
        <span>Source: <a href={this.props.sourceUrl} target='_blank'>{this.props.sourceName}</a></span>
      </div>
    )
  }
}

export default Source;
