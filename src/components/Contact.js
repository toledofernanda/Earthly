import React, { Component } from 'react';

const boxPosition = {
  marginRight: '10vw',
  marginLeft:'10vw',
  marginTop:'100px',
  width: '1024',
  height: '70%',
  boxSizing:'border-box',
  backgroundColor: "white",
  borderRadius: 30,
  padding: '20px'
}

const form = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

}

const comment = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '20px',
  width:'100%'
}

const submitButton = {
  with: '70px',
  alignSelf: 'center',
  backgroundColor: '#F05027',
  border: 'none',
  borderRadius: 7

}


class Contact extends Component {
  render() {
    return (
      <div style = {boxPosition} className = "donationBox">
        <div className = "contactTop" style = {{textAlign: 'center'}}>
            <h1>Contact</h1>
            <p style={{marginLeft:'10px', marginRight:'10px'}}>Get in touch with us.
            We would love to hear from you What would you like to see added to Earthly?
            Questions, comments, or complaints? Fill out the form below and we will be in touch with you shortly.
            </p>
        </div>
        <div className = "contactForm">
            <form style = {form} action="https://formspree.io/langara.earthly@gmail.com" method="POST">
                <label style ={{width: '40%'}}>
                  First Name
                  <script src="https://gumroad.com/js/gumroad.js"></script>
                  <input type="text" name="firstName" />
                </label>
                <br />
                <label style ={{width: '40%'}}>
                Last Name
                <input type="text" name="lastName" />
                </label>
                <br />
                <label style ={{width: '40%'}}>
                Email
                <input type="email" name="_replyto" />
                </label>
                <br />
                <label style ={{width: '40%'}}>
                Phone
                <span><input type="tel" name="phoneNumber" /></span>
                </label>
                <br />
                <div className='commentBox' style = {comment}>
                <label style = {{alignSelf: 'center'}}>Comments</label><br />
                  <label style = {{alignSelf: 'center', width:'70%'}}>
                  <textarea style ={{boxSizing: 'border-box',width: '100%', height:'140px'}} type="text" name="comments" width='80%'></textarea>
                  </label>
                  <br />
                  <input style = {submitButton} type="submit" value="Submit" />
                </div>
            </form>
          </div>
      </div>

    );
  }
}

export default Contact;
