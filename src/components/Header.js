import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom

const headerDes = {
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#19A9E1',
  marginTop: '0',
  position:'fixed',
  width: '92%',
  top: '0',
  listStyleType:'none',
  paddingLeft: '4%',
  paddingRight: '4%',
  zIndex:'20'
}

let logoName = {
  display: 'flex',
  alignItems: 'center'
}

let logo = {
  height: '55px'
}

let appName = {
  fontSize: '18pt',
  // fontWeight: 'bold',
  listStyleType: 'none',
  color: 'white',
  letterSpacing: '4px',
  paddingLeft: '10px',
}

const button = {
  padding:'10px',

  backgroundColor:'#F05027',
  borderRadius: 7,
  textDecoration:'none',
  color:'white',

}


class Header extends Component{

  render(){
    return(
        <header className="header" style={{zIndex:'20'}}>
          <ul style={headerDes}>
            <li style= {{width: '250px', marginTop:'5px'}}>
              <Link to="/" style={{textDecoration:'none'}}>
                <div style={logoName}>
                  <img src={require(`images/earthly_logo.svg`)} style={logo} alt={'Earthly'} />
                  <span className="appNameHeader" style={appName}>earthly</span>
                </div>
              </Link>
            </li>
            <li style= {{marginTop:'25px'}}><Link to="/donation" style={button}
            className={['donationHeader','button-shadow'].join(' ')}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            >Donate</Link></li>
          </ul>
        </header>
    )
  }
}
export default Header;
