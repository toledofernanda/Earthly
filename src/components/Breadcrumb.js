import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {

    /* CSS */
    let breadcrumb = {
      position: 'fixed',
      zIndex: 3,
      width: '100%',
      backgroundColor: '#43C5ED',
      padding: '10px 10px 10px 12%',
      fontSize: '0.7em',
      fontWeight: 'bold',
      letterSpacing: '1px',
      top: '70px',
    }

    /* JS */
    function capitalizeAllLetters(string) {
      var splitString = string.toLowerCase().split('_');
      //loop through each string
      for (var i = 0; i < splitString.length; i++) {
       // assign it back to the array after capitalized
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
      }
      // join all strings into an unique string and return it
      return splitString.join(' ');
    }

    return (
      <div className="breadcrumb" style={breadcrumb}>
        <Link to={`/category`}>Categories</Link> / <Link to={`/category/${this.props.category}`}>{capitalizeAllLetters(this.props.category)}</Link>
      </div>
    );

  }
}

export default Breadcrumb;
