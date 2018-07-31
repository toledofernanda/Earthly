import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';
import BackButton from 'components/BackButton';
import ThankYouDonation from 'components/ThankYouDonation';




const donation = {
  maxWidth: 'calc(1024px - 10%)',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  margin: '4% auto',
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
  height: '35px',
  color:'white',
  fontSize:'15px',
  boxShadow: '1px 3px 1px lightgray',
  marginBottom: '20px',
  listStyle:'none',
  textDecoration:'none',
  display:'block',
  cursor: 'pointer'
}

let filterTopStyle = {
  flex: '1 0 100%',
  padding: '3% 4% 1%',
  display: 'grid',
  gridTemplateColumns: '20px 1fr',
  boxSizing: 'border-box'

};


let TitleStyle = {
  textAlign: 'center',
  flex: '0 0 100%',
  fontSize: 'calc(14px + 1vw)'// responsive title
};
//hundle donation button
class Donation extends Component{

  constructor(){
    super()
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:'',
      category:'donation',
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


    window.open('https://gum.co/wDIjn', '_blank');
    e.preventDefault();
    this.setState({'submitted': true});

    const {firstName, lastName, email,phone, message, category} = this.state

    const form = await axios.post('/api/form',{
      firstName,
      lastName,
      email,
      phone,
      message,
      category
    })
}//commented out items that were not



  render(){
    if (this.state.submitted){
      return <ThankYouDonation />;
    }
    else {
      return(
      <div className="donation" style={donation}>
        <div className="contactTitle" style={filterTopStyle}>
          <BackButton component={'donation'} />
          <h1 id="mobileTitle" className = "titleStyle" style = {TitleStyle} >Donation</h1>
        </div>
          <div className="dontationContent" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            <p style={{width:'60%', textAlign:'center', marginTop:'0'}}>Help us improve Earthly!
              Your donation will help us keep Earthly free and add new rankings and features.
              100% of your donations goes towards research and app development.</p>
              <img style ={{alignSelf: 'center', width:'200px', height:'auto', borderRadius:10}} src={require(`images/team.jpg`)} alt="donationImg" />

          </div>


          <div className = "contactForm">
            <Form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
              <div>

                <input
                type="hidden"
                name= "donation"
                />

              <FormGroup style={{margin:'10px'}}>
                <Label for="firstName">Name</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'10px', padding:'3px',width:'200px', marginRight:'55px'}}
                type="text"
                name= "firstName"
                onChange = {this.handleChange}
                required
                />
              </FormGroup>


              <FormGroup  style={{margin:'10px'}}>
                <Label for="email">Email</Label>
                <input style={{border:'1px solid gray', borderRadius:7,marginLeft:'13px', padding:'3px',width:'200px', marginRight:'55px'}}
                type="email"
                name= "email"
                onChange = {this.handleChange}
                />
              </FormGroup>
            </div>

              <FormGroup style={{margin:'10px', display:'flex', justifyContent:'center',}}>
                <Label id="donationTextLabel" for="message">Message</Label>
                <textarea id = "donationTextarea" style={{border:'1px solid gray', borderRadius:7,marginLeft:'13px', padding:'3px', width:'200px', height:'100px', marginRight:'79px'}}
                type="textarea"
                name= "message"
                placeholder="Tell us what other rankings and features you’d like to see in Earthly!"
                onChange = {this.handleChange}
                />
              </FormGroup>



              <div className="donationButton">
                <div style={{letterSpacing:'.5px',listStyleType:'none', display:'flex', justifyContent:'center'}}>

                  <script src="https://gumroad.com/js/gumroad.js"></script>
                  <button className="submitButton" style ={submitButton}>Submit</button>

                </div>
            </div>
            </Form>
          </div>




      </div>

    )
  }
}
}

export default Donation;
