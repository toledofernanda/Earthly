import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from 'components/BackButton';
import ThankYou from 'components/ThankYou';

const boxPosition = {
  marginRight:'auto',
  marginLeft:'auto',
  marginTop:'100px',
  marginBottom:'100px',
  maxWidth: '1024px',
  height: '70%',
  boxSizing:'border-box',
  backgroundColor: "white",
  borderRadius: 30,
  padding: '20px',
  border: '1px solid darkgrey',
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
  with: '100px',
  alignSelf: 'center',
  backgroundColor: '#F05027',
  border: 'none',
  borderRadius: 7,
  width: '80px',
  height: '25px',
  color:'white',
  fontSize:'15px',
  boxShadow: '1px 3px 1px lightgray',
  marginBottom: '20px'
}

class Contact extends Component {
  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:'',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e){
    // if(!alert('Thank you for your feedback ' + this.state.firstName + '!')){window.location.reload();}
    //alert('Thank you for your feedback ' + this.state.firstName + '!');

    e.preventDefault();
    this.setState({'submitted': true});

    const {firstName, lastName, email,phone, message} = this.state

    const form = await axios.post('/api/form',{
      firstName,
      lastName,
      email,
      phone,
      message
    })

}

  render() {
    let outerDiv = {
      maxWidth: 'calc(1024px - 10%)',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      margin: '4% auto',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr'
    };

    let TitleStyle = {
      textAlign: 'center',
      fontSize: '14pt',
      flex: '0 0 100%',
      fontSize: 'calc(14px + 1vw)', // responsive title
    }; //Contact has calc

    let formStyle = {
      display:'flex',
      flexFlow:'row wrap',
      justifyContent:'space-around',
      // marginBottom: '3%',
      // textAlign:'center',
      color:'#58595B'
    };
    let inputForms = {
      margin: '1%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      // padding: '0 5%'
    }

    let contactForm = {
      margin: '0 20%',
    }
    let input = {
      flex: '0 0 45%',
      border:'1px solid gray',
      borderRadius:7,
      // marginRight:'10%',
      alignSelf: 'flex-start'
    }
    let label = {
      // marginLeft : '10%',
      marginRight: '3%',
      textAlign: 'right',
      alignSelf: 'flex-end',
      flex: '0 0 50%',
    }

      if (this.state.submitted){
        return <ThankYou />;
      }
      else {
        return(
      <div className = "contactOuterDiv" style = {outerDiv}>
        <div className="contactTitle" style={filterTopStyle}>
          <BackButton component={'category'} />
          <h1 className = "titleStyle" style = {TitleStyle}>Contact</h1>
        </div>
        <div>
          <p style={{textAlign: 'center', width:'50%', margin: '1% auto', color:'#58595B'}}>
            Get in touch with Earthly's design and development team!
          </p>
        </div>
        <div className = "contactForm" style = {contactForm}>
          <Form onSubmit={this.handleSubmit} style={formStyle}>
            <div className = "inputForms" style = {inputForms}>
            <FormGroup  className = "inputStyle">
              <Label for="firstName" style = {label}>First Name</Label>
              <input style={input}
              type="text"
              name= "firstName"
              onChange = {this.handleChange}
              />
            </FormGroup>
            <FormGroup  className = "inputStyle">
              <Label for="lastName" style = {label}>Last Name</Label>
              <input style={input}
              type="text"
              name= "lastName"
              onChange = {this.handleChange}
              />
            </FormGroup>
            <FormGroup  className = "inputStyle">
              <Label for="phone" style = {label}>Phone</Label>
            <input style={input}
              type="text"
              pattern="[0-9]*"
              name= "phone"
              onChange = {this.handleChange}
              />
            </FormGroup>
            <FormGroup  className = "inputStyle">
              <Label for="email" style = {label}>Email</Label>
              <input style={input}
              type="email"
              name= "email"
              onChange = {this.handleChange}
              />
            </FormGroup>
          </div>

            <FormGroup style={{flex:'1 0 100%', textAlign:'center', marginTop:'3%', marginBottom: '3%'}}>
              <Label for="message" style={{margin:'10px'}}>Message<br /></Label>
              <textarea style={{fontSize:'18px', padding:'5px', marginTop:'10px',marginBottom:'10px', width: '100%', height:'160px',border:'1px solid black', borderRadius:7}}
              type="textarea"
              name= "message"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <button style={submitButton}>Submit</button>
          </Form>


          </div>
      </div>

    );
  }
}
}

export default Contact;
