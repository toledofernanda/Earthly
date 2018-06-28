import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {

    /* CSS */
    let breadcrumb = {
      backgroundColor: '#19A9E1',
      padding: '10px',
      fontSize: '0.9em'
    }

    /* JS */
    let component = this.props.component;

    function capitalizeAllLetters(string) {
      // console.log("string", string)
      var splitString = string.toLowerCase().split('_');
      //loop through each string
      for (var i = 0; i < splitString.length; i++) {
       // assign it back to the array after capitalized
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
      }
      // join all strings into an unique string and return it
      return splitString.join(' ');
    }

    console.log("bread", this.props.category);

    if(component === 'topic') {
      return (
        <div className="breadcrumb" style={breadcrumb}>
          <Link to={`/category`}>Categories</Link> / <Link to={`/category/${this.props.category}`}>{capitalizeAllLetters(this.props.category)}</Link>
        </div>
      );
    } else {
      return (
        <div className="breadcrumb" style={breadcrumb}>
          <Link to={`/category`}>Categories</Link> / <Link to={`/category/${this.props.category}`}>{capitalizeAllLetters(this.props.category)}</Link> / {capitalizeAllLetters(this.props.topic)}
        </div>
      );
    }
  }
}

export default Breadcrumb;
