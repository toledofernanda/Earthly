import React, { Component } from 'react';

const donateButton = {
  color: 'white',
  textDecoration:'none',
  fontSize: '20px',
  backgroundColor: '#F05027',
  border:'none',
  borderRadius: 5,
  flex: '0 0 15%',
  display:'inline-block',
  textAlign: 'center'
}


class Donation extends Component{

  render(){
    return(
      <div className = "donationBox" style={{width:'80%', margin:'auto'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'30px'}}>
          <h1 style={{marginTop: '100px'}}>Donations</h1>
          <p style={{fontSize:'20px'}}>Your donation helps us to keep Earthly free for student use.<br />
            Help inspire student learning by donating today.</p>
        </div>
          <div className = "donate" style = {{display:'flex', justifyContent:'space-around'}}>

              <a style ={donateButton} class="gumroad-button" href="https://gum.co/DYaBs" target="_blank">
              $5
              <script src="https://gumroad.com/js/gumroad.js"></script></a>

              <a style ={donateButton} class="gumroad-button" href="https://gum.co/oehga" target="_blank">
              $10
              <script src="https://gumroad.com/js/gumroad.js"></script></a>

              <a style ={donateButton} class="gumroad-button" href="https://gum.co/dkZic">
              $20
              <script src="https://gumroad.com/js/gumroad.js"></script></a>

              <a style ={donateButton} class="gumroad-button" href="https://gum.co/Qkgbg" target="_blank">
              $50
              <script src="https://gumroad.com/js/gumroad.js"></script></a>

              <a style ={donateButton} class="gumroad-button" href="https://gum.co/mosC?wanted=true" target="_blank">
              $100
              <script src="https://gumroad.com/js/gumroad.js"></script>
              </a>
        </div>
      </div>
    )
  }
}

export default Donation;
