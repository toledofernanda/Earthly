import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {

    /* CSS */
    let breadcrumb = {
      backgroundColor: 'rgba(25,169,225,0.7)',
      padding: '10px',
      fontSize: '0.7em'
    }

    /* JS */
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

    // console.log("bread", this.props.category);

    return (
      <div className="breadcrumb" style={breadcrumb}>
        <Link to={`/category`}>Categories</Link> / <Link to={`/category/${this.props.category}`}>{capitalizeAllLetters(this.props.category)}</Link>
      </div>
    );

  }
}

export default Breadcrumb;