import React, { Component } from 'react';
import BackButton from 'components/BackButton';

class ThankYou extends Component {
  render(){
    let outerDiv = {
      maxWidth: '1024px',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'space-between',
      marginTop: '5%',
      marginBottom: '5%',
      backgroundColor: 'white',
      borderRadius: 30,
      textAlign:'center',
      height: '70vh'
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
          <h1 style={titleStyle}>Thank You for contacting Team Earthly.</h1>
        </div>
        <img style ={{alignSelf: 'center', maxWidth:'300px', height:'auto', borderRadius:10}} src={require(`images/team.jpg`)} alt="donationImg" />
        <p >We will get back to you as soon as possible.</p>
      </div>
    )
  }
}
export default ThankYou;
