import React, { Component } from 'react';

class Source extends Component{
  render(){

    /* CSS */
    let source = {
      fontSize: 'calc(8px + .3vw)', // responsive 
      marginBottom: '10px'
    }

    return (
      <div className="source" key="source" style={source}>
        <span>Source: <a href={this.props.sourceUrl} target='_blank'>{this.props.sourceName}</a></span>
      </div>
    )
  }
}

export default Source;
