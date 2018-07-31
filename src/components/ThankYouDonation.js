import React, { Component } from 'react';
import BackButton from 'components/BackButton';

class ThankYou extends Component {
  render(){
    let outerDiv = {
      maxWidth: 'calc(1024px - 10%)',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'space-between',
      marginTop: '4%',
      marginBottom: '2.5%',
      backgroundColor: 'white',
      borderRadius: 30,
      textAlign:'center',
      height: '70vh',
      paddingBottom: '2%'
    }; //style for the outside div of main component
    let navStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '40px 10fr'
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
        <img style ={{alignSelf: 'center', maxWidth: '100%', height:'auto', borderRadius:10}} src={require(`images/teamThankYou.jpg`)} alt="donationImg" />
        <p>Your donation will help us improve our website.</p>
      </div>
    )
  }
}
export default ThankYou;
