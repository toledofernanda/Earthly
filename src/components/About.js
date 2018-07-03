import React, { Component } from 'react';

const memberBox = {
  fernanda: {
  color: 'white',
  textAlign:'center',
  padding: '10px',
  marginBottom:'60px',
  width:'170px',
  backgroundColor: '#4AB85C'
},

  mana:{
  color: 'white',
  textAlign:'center',
  alignItems:'center',
  padding: '10px',
  marginBottom:'60px',
  width:'170px',
  backgroundColor: '#F05027'
},

  tomo:{
    color: 'white',
    textAlign:'center',
    alignItems:'center',
    padding: '10px',
    marginBottom:'60px',
    width:'170px',
    backgroundColor: '#19A9E1'
  },

  jenn:{
    color: 'white',
    textAlign:'center',
    alignItems:'center',
    padding: '10px',
    marginBottom:'60px',
    width:'170px',
    backgroundColor: '#00B8A6'
  },
  marlowe:{
    color: 'white',
    textAlign:'center',
    alignItems:'center',
    padding: '10px',
    marginBottom:'60px',
    width:'170px',
    backgroundColor: '#152D53'
  },


}

const memberImage = {
  marginTop: '-50px',
  borderRadius: '50%'
}


class About extends Component{
  render(){
    return(
      <div style={{ marginRight:'5%', marginLeft:'5%', }}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{ marginBottom:'60px'}}>Meet Our Team</h1>
      </div>
        <div style = {{display:'flex', justifyContent:'space-around', flexFlow:'row wrap', boxSizing:'border-box'}} className='aboutContainer'>
          <div className='Fernanda' style = {memberBox.fernanda}>
            <img style = {memberImage} img src={require(`images/most_dogs.png`)} alt="FernandaPic"/>
            <h3>Fernanda</h3>
            <h4>Lead Dev</h4>
            <p>Fernanda has a background and Advertising at Mackenzie University in
            São Paulo, Brazil. She
            also holds a certificate
            in Internet and Web
            Technology, and CSPO.
            Fernanda is Earthly’s
            lead Developer.</p>
            <p>
            Her hobbies are figure
            skating, biking, and
            watching TV series
            with her cat, Garfield.
            </p>

          </div>
          <div className='Mana' style = {memberBox.mana}>
            <img style = {memberImage} img src={require(`images/most_dogs.png`) } alt="manaPic"/>
            <h3>Mana</h3>
            <h4>Dev and QA</h4>
            <p>Fernanda has a background and Advertising at Mackenzie University in
            São Paulo, Brazil. She
            also holds a certificate
            in Internet and Web
            Technology, and CSPO.
            Fernanda is Earthly’s
            lead Developer.</p>
            <p>
            Her hobbies are figure
            skating, biking, and
            watching TV series
            with her cat, Garfield.
            </p>
          </div>
          <div className='Tomoko' style = {memberBox.tomo}>
            <img style = {memberImage} img src={require(`images/most_dogs.png`) } alt="tomokoPic"/>
            <h3>Tomoko</h3>
            <h4>Dev and PM</h4>
            <p>Fernanda has a background and Advertising at Mackenzie University in
            São Paulo, Brazil. She
            also holds a certificate
            in Internet and Web
            Technology, and CSPO.
            Fernanda is Earthly’s
            lead Developer.</p>
            <p>
            Her hobbies are figure
            skating, biking, and
            watching TV series
            with her cat, Garfield.
            </p>
          </div>
          <div className='Jenn' style = {memberBox.jenn}>
            <img style = {memberImage} img src={require(`images/most_dogs.png`)}  alt="jennPic" />
            <h3>Jenn</h3>
            <h4>UX and Designer</h4>
            <p>Fernanda has a background and Advertising at Mackenzie University in
            São Paulo, Brazil. She
            also holds a certificate
            in Internet and Web
            Technology, and CSPO.
            Fernanda is Earthly’s
            lead Developer.</p>
            <p>
            Her hobbies are figure
            skating, biking, and
            watching TV series
            with her cat, Garfield.
            </p>
          </div>
          <div className='Marlowe' style = {memberBox.marlowe}>
            <img style = {memberImage} img src={require(`images/most_dogs.png`)}  alt="marlowePic"/>
            <h3>Marlowe</h3>
            <h4>UX and Designer</h4>
            <p>Fernanda has a background and Advertising at Mackenzie University in
            São Paulo, Brazil. She
            also holds a certificate
            in Internet and Web
            Technology, and CSPO.
            Fernanda is Earthly’s
            lead Developer.</p>
            <p>
            Her hobbies are figure
            skating, biking, and
            watching TV series
            with her cat, Garfield.
            </p>
          </div>
          </div>
      </div>
    )
  }
}

export default About;
