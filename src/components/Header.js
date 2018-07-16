import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //first npm install react-render-dom

const headerDes = {
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#19A9E1',
  marginTop: '0',
  position:'fixed',
  zIndex: 5,
  width: '100%',
  top: '0',
  listStyleType:'none'
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
  marginRight:'60px',
  backgroundColor:'#F05027',
  borderRadius: 7,
  textDecoration:'none',
  color:'white',
  boxShadow: '1px 3px 1px lightgray'
}


class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    console.log("hovered")
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render(){
    const hoverClass = this.state.isHovered ? "donation-hover" : "";
    return(
        <header className="header">
          <ul style={headerDes}>
            <li style= {{width: '250px', marginTop:'5px'}}>
              <Link to="/" style={{textDecoration:'none'}}>
                <div style={logoName}>
                  <img src={require(`images/earthly_logo.svg`)} style={logo} alt={'Earthly'} />
                  <span style={appName}>earthly</span>
                </div>
              </Link>
            </li>
            <li style= {{marginTop:'25px'}}><Link to="/donation" style={button}
            className={hoverClass}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            >Donate</Link></li>
          </ul>
        </header>
    )
  }
}
export default Header;
