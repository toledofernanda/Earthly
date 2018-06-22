import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom
import About from 'components/About';
import Contact from 'components/Contact';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
