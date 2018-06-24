import React, { Component } from 'react';
import TopicFilter from 'components/TopicFilter';

//This component displays a category in primary categories
class StepTitle extends Component{
  render() {
    let catTitleStyle = {
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%'
    };
    return (
      <h1 style={catTitleStyle}>
        Step 1: Select a Category
      </h1>
      );
    }
  }



export default StepTitle;
