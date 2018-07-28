import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import BackButton from 'components/BackButton';



const donation = {
  maxWidth: 'calc(1024px - 10%)',
  margin: 'auto',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  marginTop: '4%',
  marginBottom: '2.5%',
  paddingBottom: '2%',
  backgroundColor: 'white',
  borderRadius: 30,
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
  textDecoration:'none',
  paddingTop:'3px'

}

let filterTopStyle = {
  padding: '1.5% 4%',
  display: 'grid',
  gridTemplateColumns: '40px 10fr'
};


let TitleStyle = {
  textAlign: 'center',
  flex: '0 0 100%',
  fontSize: 'calc(14px + 1vw)'// responsive title
};
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

  // onToken = (token) => {
  //   fetch('/save-stripe-token', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }

  render(){
    const hoverClass = this.state.isHovered ? "donation-hover" : "";
    // let amount = parseInt(this.state.amount) * 100;
    return(
      <div className="donation" style={donation}>
        <div className="contactTitle" style={filterTopStyle}>
          <BackButton component={'donation'} />
          <h1 className = "titleStyle" style = {TitleStyle} >Donation</h1>
        </div>
          <div className="dontationContent" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            <p style={{width:'60%', textAlign:'center'}}>Help us improve Earthly!
              Your donation will help us keep Earthly free and add new rankings and features.
              100% of your donations goes towards research and app development.</p>
          </div>

          <div className = "contactForm">
            <Form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
              <div>
              <FormGroup style={{margin:'10px'}}>
                <Label for="firstName">Name</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'10px', padding:'3px',width:'150px'}}
                type="text"
                name= "firstName"
                onChange = {this.handleChange}
                required
                />
              </FormGroup>

               {/* <FormGroup  style={{margin:'10px',paddingRight:'16px'}}>
                <Label for="amount">Amoun</Label>
                <input style={{border:'1px solid gray', borderRadius:7, marginLeft:'15px', padding:'3px'}}
                type="text"
                name= "amount"
                onChange = {this.handleChange}
                required
                />
              </FormGroup>  */}

              <FormGroup  style={{margin:'10px'}}>
                <Label for="email">Email</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'13px', padding:'3px',width:'150px'}}
                type="email"
                name= "email"
                onChange = {this.handleChange}
                />
              </FormGroup>
            </div>

              <FormGroup style={{margin:'10px', display:'flex', justifyContent:'center',}}>
                <Label for="message">Message</Label>
                <textarea style={{border:'1px solid gray', borderRadius:7,marginLeft:'13px', padding:'3px', width:'150px', height:'150px', marginRight:'24px'}}
                type="textarea"
                name= "message"
                placeholder="Tell us what other rankings and features you’d like to see in Earthly!"
                onChange = {this.handleChange}
                />
              </FormGroup>

              {/* <FormGroup style ={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <Label for="message" style={{width:'100%'}}>Message</Label>
                <textarea style={{width: '30%', margin:'20px',height:'200px',border:'1px solid black', borderRadius:7, padding:'10px', fontSize:'18px'}}
                type="textarea"
                name= "message"
                placeholder="Tell us what other rankings and features you’d like to see in Earthly!"
                onChange = {this.handleChange}
                />
              </FormGroup> */}

              <div className="donationButton">
                <div style={{listStyleType:'none', display:'flex', justifyContent:'center', marginLeft:'55px'}}>

                  <script src="https://gumroad.com/js/gumroad.js"></script>
                  <a className={['gumroad-button','button-shadow', hoverClass].join(' ')} href="https://gum.co/wDIjn" style ={submitButton}>Donate</a>
                </div>
            </div>
            </Form>
          </div>




      </div>

    )
  }
}

export default Donation;
