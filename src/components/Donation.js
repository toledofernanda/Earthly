import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const donation = {
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

//hundle donation button
class Donation extends Component{

  //hundle email
  constructor(){
    super()
    this.state={
      firstname:'',
      amount:'',
      email:'',
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
    const {firstName, amount, email, message} = this.state

    const form = await axios.post('/api/form',{
      firstName,
      amount,
      email,
      message
    })
}

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render(){
    let amount = parseInt(this.state.amount) * 100;
    return(
      <div className="donation" style={donation}>
          <div className="dontationContent" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <p style={{width:'60%', textAlign:'center'}}>Help Earthly to continue adding content by donationg today. 100% of your donations goes towards research and site development.</p>
            <img style ={{width:'25%'}} src={require(`images/most_dogs.png`)} alt="donationImg" />
          </div>

          <div className = "contactForm">
            <Form onSubmit={this.handleSubmit} style={{display:'flex', flexWrap:'wrap', justifyContent:'center', textAlign:'center'}}>
              <FormGroup style={{flexBasis:'50%'}}>
                <Label for="firstName">Name</Label>
                <input style={{border:'1px solid gray', borderRadius:7}}
                type="text"
                name= "firstName"
                onChange = {this.handleChange}
                />
              </FormGroup>

              <FormGroup style={{flexBasis:'50%'}}>
                <Label for="amount">Amount</Label>
                <input style={{border:'1px solid gray', borderRadius:7}}
                type="text"
                name= "amount"
                onChange = {this.handleChange}
                />
              </FormGroup>

              <FormGroup style={{flexBasis:'50%'}}>
                <Label for="email">Email</Label>
                <input style={{border:'1px solid gray', borderRadius:7}}
                type="email"
                name= "email"
                onChange = {this.handleChange}
                />
              </FormGroup>


              <FormGroup style={{flexBasis:'100%'}}>
                <Label for="message" style={{width:'100%'}}>Message</Label>
                <textarea style={{width: '60%', height:'200px',border:'1px solid black', borderRadius:7}}
                type="textarea"
                name= "message"
                onChange = {this.handleChange}
                />
              </FormGroup>

              <div className="donationButton">
                <div style={{listStyleType:'none', display:'flex', justifyContent:'space-around'}}>

                    <StripeCheckout
                      token={this.onToken}
                      stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                      name="Earthly"
                      description="Donation"
                      panelLabel="Donate"
                      amount={amount}
                      currency="CAD"
                      label ="Donate"
                    />
                </div>
            </div>
            </Form>
          </div>




      </div>

    )
  }
}

export default Donation;
