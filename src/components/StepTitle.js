import React, { Component } from 'react';

//This component displays a step title
class StepTitle extends Component{
  render() {
    let catTitleStyle = {
      textAlign: 'center',
      marginRight: '20px',
      fontSize: 'calc(14px + 1vw)' // responsive title
    };
    let step = ""; //variable to hold text to display
    if (this.props.title === "step1"){
      step = "Step 1: Select a Category";
    }else {
      step = "Step 2: Select a Ranking";
    }
    return (
      <h1 className = "titleStyle" style={catTitleStyle}>
        {step}
      </h1>
      );
    }
  }



export default StepTitle;
