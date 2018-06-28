import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom


const headerDes = {
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#19A9E1',
  marginTop: '0',
  position:'fixed',
  width: '100%',
  top: '0',
  listStyleType:'none'
}

const button = {
  padding:'5px',
  marginRight:'60px',
  backgroundColor:'#F05027',
  borderRadius: 7,
  textDecoration:'none',
  color:'white'
}

class Header extends Component{
  render(){
    return(
        <header className="header">
          <ul style={headerDes}>
            <li style= {{width: '250px', marginTop:'10px'}}><Link to="/"><img src={require(`images/most_dogs.png`)} alt={'Earthly'} /></Link></li>
            <li style= {{marginTop:'20px'}}><Link to="/donation" style={button}>Donation</Link></li>
          </ul>
        </header>
    )
  }
}
export default Header;
