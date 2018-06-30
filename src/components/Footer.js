import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom


const footerDes = {
  display:'flex',
  justifyContent:'center',
  backgroundColor: '#152D53',
  marginBottom: '0',
  listStyleType:'none',
  height:'40px',
  paddingTop:'10px'
}

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <ul style={footerDes}>
          <li><Link to="/about" style={{textDecoration:'none', color: 'white'}}>about<span style={{marginLeft: '5px', marginRight:'5px'}}>|</span></Link></li>
          <li><Link to="/contact" style={{textDecoration:'none', color: 'white'}}>contact</Link></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
