import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackButton extends Component {
  render() {

    /* CSS */
    let backButtonDiv = {
      flex: '0 0 20%',
      textAlign: 'left'
    }

    let backButton = {
      width: '19px',
      cursor: 'pointer'
    }

    /* JS */
    let unit = this.props.unit;
    let component = this.props.component;
    let renderData = '';
    let category = '';
    let link = '';

    if(unit !== 'none') {
      renderData = unit;
    }

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
