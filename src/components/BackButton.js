import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  render() {

    /* CSS */
    let backButtonDiv = {
      margin: 'auto',
      alignSelf: 'flex-start',
      zIndex: '10' //Firefox requires this order
    }

    let backButton = {
      width: '19px',
      cursor: 'pointer'
    }

    /* JS */
    let component = this.props.component;
    let category = '';
    let link = '';

    if(component === 'result') {
      category = this.props.category;
      link = `/category/${category}`;
    } else if(component === 'topic') {
      link = '/category';
    } else {
      link = '/';
    }

    return (
      <div style={backButtonDiv} >
        <Link to={link}>
          <img src={require(`images/pointer.svg`)} alt={'Back'} style={backButton} />
        </Link>
      </div>
    );

  }
}

export default BackButton;
