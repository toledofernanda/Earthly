import React, { Component } from 'react';

//This component displays a step title
class StepTitle extends Component{
  render() {
    let catTitleStyle = {
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%',
      marginBottom: '10%' //margin to detach the title from buttons
    };
    let step = ""; //variable to hold text to display
    if (this.props.title === "step1"){
      step = "Step 1: Select a Category";
    }else {
      step = "Step 2: Select a Ranking";
    }
    return (
      <h1 style={catTitleStyle}>
        {step}
      </h1>
      );
    }
  }



export default StepTitle;
