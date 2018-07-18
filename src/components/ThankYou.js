import React, { Component } from 'react';

class ThankYou extends Component {
  render(){
    let outerDiv = {
      maxWidth: '1024px',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      marginTop: '5%',
      marginBottom: '5%',
      backgroundColor: 'white',
      borderRadius: 30,
      textAlign:'center',
      height: '70vh'
    }; //style for the outside div of main component
    return(
      <div className="thankyou" key="thankyou" style = {outerDiv}>
        <h1 style={{fontSize:'1.5rem'}}>Thank you for the message!</h1>
      </div>
    )
  }
}
export default ThankYou;
