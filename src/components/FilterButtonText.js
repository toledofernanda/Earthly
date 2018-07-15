import React, { Component } from 'react';
import { db } from './Db';
//This component displays a category in primary categories
class FilterButtonText extends Component{
  render() {
    let catTextStyle = {
      textAlign: 'center',
      fontSize: '12pt',
      margin: 0
    };
    let category = this.props.category;
    let topic = this.props.topic;
    let dbtext = "";
    let text = "";

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (this.props.name === "stepOne"){
      dbtext = `${category}`;
      text = capitalizeFirstLetter(dbtext);
    }else {
      dbtext = db[category][topic][0]['topic_description'];
      text = capitalizeFirstLetter(dbtext);
  }
    return (
      <p style={catTextStyle}>
        {text}
      </p>
      );
    }
  }



export default FilterButtonText;
