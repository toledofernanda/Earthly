import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

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
class Donation extends Component{

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
    return(
      <div className="donation" style={donation}>
          <div className="dontationContent" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <p style={{width:'60%', textAlign:'center'}}>Help Earthly to continue adding content by donationg today. 100% of your donations goes towards research and site development.</p>
            <img style ={{width:'25%'}} src={require(`images/most_dogs.png`)} alt="donationImg" />
          </div>
          <div className="donationButton">
            <ul style={{listStyleType:'none', display:'flex', justifyContent:'space-around'}}>
              <li>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                  name="Earthly"
                  description="Donation"
                  panelLabel="Donate"
                  amount={500}
                  currency="CAD"
                  label ="Donate $5"
                />
              </li>

              <li>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                  name="Earthly"
                  description="Donation"
                  panelLabel="Donate"
                  amount={1000}
                  currency="CAD"
                  label ="Donate $10"
                />
              </li>

              <li>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                  name="Earthly"
                  description="Donation"
                  panelLabel="Donate"
                  amount={2000}
                  currency="CAD"
                  label ="Donate $20"
                />
              </li>

              <li>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                  name="Earthly"
                  description="Donation"
                  panelLabel="Donate"
                  amount={5000}
                  currency="CAD"
                  label ="Donate $50"
                />
              </li>

              <li>
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_xJ6YNAqBJOlMsVzqRKhUzJXw"
                  name="Earthly"
                  description="Donation"
                  panelLabel="Donate"
                  amount={10000}
                  currency="CAD"
                  label ="Donate $100"
                />
              </li>


            </ul>
          </div>
      </div>
      // <div className = "donationBox" style={{width:'80%', margin:'auto'}}>
      //   <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'30px'}}>
      //     <h1 style={{marginTop: '100px'}}>Donations</h1>
      //     <p style={{fontSize:'20px'}}>Your donation helps us to keep Earthly free for student use.<br />
      //       Help inspire student learning by donating today.</p>
      //     <h4>Please choose an amount to donate for us!</h4>
      //   </div>
      //     <div className = "donate" style = {{display:'flex', justifyContent:'space-around'}}>
      //
      //         <a style ={donateButton} class="gumroad-button" href="https://gum.co/DYaBs" target="_blank">
      //         $5
      //         <script src="https://gumroad.com/js/gumroad.js"></script></a>
      //
      //         <a style ={donateButton} class="gumroad-button" href="https://gum.co/oehga" target="_blank">
      //         $10
      //         <script src="https://gumroad.com/js/gumroad.js"></script></a>
      //
      //         <a style ={donateButton} class="gumroad-button" href="https://gum.co/dkZic">
      //         $20
      //         <script src="https://gumroad.com/js/gumroad.js"></script></a>
      //
      //         <a style ={donateButton} class="gumroad-button" href="https://gum.co/Qkgbg" target="_blank">
      //         $50
      //         <script src="https://gumroad.com/js/gumroad.js"></script></a>
      //
      //         <a style ={donateButton} class="gumroad-button" href="https://gum.co/mosC?wanted=true" target="_blank">
      //         $100
      //         <script src="https://gumroad.com/js/gumroad.js"></script>
      //         </a>
      //   </div>
      // </div>
    )
  }
}

export default Donation;
