import React, { Component } from 'react';
import CategoryButton from 'components/CategoryButton';
//This component displays a category in primary categories
class FilterButtonText extends Component{
  constructor(props){
      super(props);
    }
  render() {
    let catTextStyle = {
      textAlign: 'center',
      fontSize: '12pt',
      margin: 0
    };
    let category = this.props.category;
    let topic = this.props.topic;
    let text = "";

    if (this.props.name == "stepOne"){
      text = `${category}`;
    }else {
      text = `${topic}`;
  }
    return (
      <p style={catTextStyle}>
        {text}
      </p>
      );
    }
  }



export default FilterButtonText;
