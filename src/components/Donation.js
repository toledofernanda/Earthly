import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import BackButton from 'components/BackButton';



const donation = {
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

let TitleStyle = {
  textAlign: 'center',
  fontSize: '14pt',
  flex: '0 0 100%',
}

let filterTopStyle = {
  padding: '1.5% 4%',
  display: 'grid',
  gridTemplateColumns: '40px 10fr'
};

const back ={
  textAlign: 'left !important'
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
        <div className="contactTitle" style={filterTopStyle}>
          <BackButton component={'donation'} />
          <h1 style = {TitleStyle}>Donation</h1>
        </div>
          <div className="dontationContent" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            <p style={{width:'60%', textAlign:'center'}}>Help us improve Earthly!
Your donation will help us keep Earthly free and add new rankings and features.
100% of your donations goes towards research and app development.</p>
            <img style ={{width:'40%', borderRadius:10, marginTop:'10px', marginBottom:'15px'}} src={require(`images/team.jpg`)} alt="donationImg" />
          </div>

          <div className = "contactForm">
            <Form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
              <div>
              <FormGroup style={{margin:'10px'}}>
                <Label for="firstName">Name</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'10px', padding:'3px'}}
                type="text"
                name= "firstName"
                onChange = {this.handleChange}
                required
                />
              </FormGroup>

              <FormGroup  style={{margin:'10px',paddingRight:'16px'}}>
                <Label for="amount">Amoun</Label>
                <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'15px', padding:'3px'}}
                type="text"
                name= "amount"
                onChange = {this.handleChange}
                required
                />
              </FormGroup>

              <FormGroup  style={{margin:'10px'}}>
                <Label for="email">Email</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'13px', padding:'3px'}}
                type="email"
                name= "email"
                onChange = {this.handleChange}
                />
              </FormGroup>
            </div>

              <FormGroup style ={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <Label for="message" style={{width:'100%'}}>Message</Label>
                <textarea style={{width: '30%', margin:'20px',height:'200px',border:'1px solid black', borderRadius:7, padding:'10px', fontSize:'18px'}}
                type="textarea"
                name= "message"
                placeholder="Tell us what other rankings and features you’d like to see in Earthly!"
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
