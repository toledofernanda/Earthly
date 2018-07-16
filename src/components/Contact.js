import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from 'components/BackButton';

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
  color:'white',
  fontSize:'15px'

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
    if(!alert('Thank you for your feedback ' + this.state.firstName + '!')){window.location.reload();}
    //alert('Thank you for your feedback ' + this.state.firstName + '!');

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
      <div style = {boxPosition} className = "donationBox" >
        <div className = "contactTop" style = {{textAlign: 'center'}}>
          <BackButton className='button-shadow' component={'contact'} />
            <h1>Contact</h1>
            <p style={{width:'50%', marginLeft:'auto', marginRight:'auto', color:'#58595B'}}>Get in touch with us.
            We would love to hear from you What would you like to see added to Earthly?
            Questions, comments, or complaints? Fill out the form below and we will be in touch with you shortly.
            </p>
        </div>
        <div className = "contactForm">
          <Form onSubmit={this.handleSubmit} style={{display:'flex', flexWrap:'wrap', justifyContent:'center', textAlign:'center',color:'#58595B'}}>
            <div>
            <FormGroup  style={{display:'flex', marginRight:'30px', marginBottom:'10px'}}>
              <Label for="firstName">First Name</Label>
              <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'5px'}}
              type="text"
              name= "firstName"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup style={{display:'flex',justifyContent:'flex-end', marginRight:'30px', marginBottom:'10px'}}>
              <Label for="phone">phone</Label>
              <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'5px'}}
              type="text"
              pattern="[0-9]*"
              name= "phone"
              onChange = {this.handleChange}
              />
            </FormGroup>

          </div>
          <div>
            <FormGroup style={{display:'flex', marginRight:'30px', marginBottom:'10px'}}>
              <Label for="lastName">Last Name</Label>
              <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'5px'}}
              type="text"
              name= "lastName"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <FormGroup style={{display:'flex',justifyContent:'flex-end', marginRight:'30px', marginBottom:'10px'}}>
              <Label for="email">Email</Label>
              <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'5px'}}
              type="email"
              name= "email"
              onChange = {this.handleChange}
              />
            </FormGroup>


          </div>

            <FormGroup style={{flexBasis:'100%'}}>
              <Label for="message" style={{margin:'10px'}}>Message<br /></Label>
              <textarea style={{fontSize:'18px', padding:'5px', marginTop:'10px',marginBottom:'10px', width: '50%', height:'200px',border:'1px solid black', borderRadius:7}}
              type="textarea"
              name= "message"
              onChange = {this.handleChange}
              />
            </FormGroup>

            <button style={submitButton} className="button-shadow">Submit</button>
          </Form>


          </div>
      </div>

    );
  }
}

export default Contact;
