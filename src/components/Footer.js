import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom


const footerDes = {
  display:'flex',
  justifyContent:'center',
  margin: '0',
  listStyleType:'none',
  height:'40px',
  paddingTop:'14px',
  paddingLeft:'0'
}

class Footer extends Component{
  render(){
    return(
      <footer className="footer" style={{backgroundColor: '#152D53', boxSizing:'border-box',height:'50px', margin: '0'}}>
        <ul style={footerDes}>
          <li><Link to="/" style={{textDecoration:'none', color: 'white'}}>home<span style={{marginLeft: '5px', marginRight:'5px'}}>|</span></Link></li>
          <li><Link to="/about" style={{textDecoration:'none', color: 'white'}}>about<span style={{marginLeft: '5px', marginRight:'5px'}}>|</span></Link></li>
          <li><Link to="/contact" style={{textDecoration:'none', color: 'white'}}>contact</Link></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
