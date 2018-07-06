import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  with: '100px',
  alignSelf: 'center',
  backgroundColor: '#F05027',
  border: 'none',
  borderRadius: 7,
  width: '80px',
  height: '25px',
  color:'white'

}


class Contact extends Component {
  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:''

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
    e.preventDefault()
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
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <input
              type="text"
              name= "firstName"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <input
              type="text"
              name= "lastName"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <input
              type="email"
              name= "email"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">phone</Label>
              <input
              type="text"
              pattern="[0-9]*"
              name= "phone"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup style={{width:'200px'}}>
              <Label for="message">Message</Label>
              <input
              type="textarea"
              name= "message"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <button>Submit</button>
          </Form>


          </div>
      </div>

    );
  }
}

export default Contact;
