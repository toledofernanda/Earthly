import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom

class Header extends Component{
  render(){

    let logo = {
      height: '55px'
    }
    
    return(
        <header className="header">
          <ul>
            <li><Link to="/"><img style={logo} src={require(`images/earthly_logo.svg`)} alt={'Earthly'} /></Link></li>
            <li><Link to="/donation">Donation</Link></li>
          </ul>
        </header>
    )
  }
}

export default Header;
