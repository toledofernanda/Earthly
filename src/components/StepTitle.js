import React, { Component } from 'react';

//This component displays a step title
class StepTitle extends Component{
  render() {
    let catTitleStyle = {
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      textAlign: 'center',
      // fontSize: '14pt',
      // flex: '0 0 100%',
      fontSize: 'calc(14px + 1vw)', // responsive title
      // marginBottom: '10%' //margin to detach the title from buttons
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
