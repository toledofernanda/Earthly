import React, { Component } from 'react';
import BackButton from 'components/BackButton';

class ThankYou extends Component {
  render(){
    let outerDiv = {
      maxWidth: 'calc(1024px - 10%)',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      marginTop: '4%',
      marginBottom: '2.5%',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component
    let navStyle = {
      flex: '1 0 100%',
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr',
      boxSizing: 'border-box'
    }
    let titleStyle = {
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%',
      // marginBottom: '10%' //margin to detach the title from buttons
    };
    return(
      <div className="thankyou" key="thankyou" style = {outerDiv}>
        <div className="nav" style={navStyle}>
          <BackButton component={'category'} className='button-shadow' />
          <h1 style={titleStyle}>Thank You for contributing to Team Earthly.</h1>
        </div>
        <div style = {{flex: '1 0 100%', textAlign: 'center'}}>
        <img style ={{alignSelf: 'center', maxWidth: '100%', height:'auto', borderRadius:10}} src={require(`images/teamThankYou.jpg`)} alt="donationImg" />
        </div>
      <p>Your donation will help us improve Earthly.</p>
      </div>
    )
  }
}
export default ThankYou;
