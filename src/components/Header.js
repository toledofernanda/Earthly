import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom

class Header extends Component{
  render(){
    return(
        <header className="header">
          <ul>
            <li><Link to="/"><img src={require(`images/most_dogs.png`)} alt={'Earthly'} /></Link></li>
            <li><Link to="/donation">Donation</Link></li>
          </ul>
        </header>
    )
  }
}
export default Header;
