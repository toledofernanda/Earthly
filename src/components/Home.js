import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render() {
    /* CSS */
    //outer div
    let mainDiv = {
      maxWidth: 'calc(1024px - 10%)',
      minWidth: '80vw',
      height: 'calc(100vh - 120px)',
      margin: '0 auto',
      marginBottom: '0',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      textAlign:'center'
    }//style for the outside div of main component

    // text and start button div
    let introDiv = {
      flex: '0 0 50%',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4%'
    }

    let h1 = {
      marginTop: '4%',
      fontSize: 'calc(20px + .8vw)',
    }

    let h3 = {
      fontSize: 'calc(10px + .8vw)',
    }

    let startButton = {
      border: 'none',
      backgroundColor: 'rgb(0,184,166)',
      borderRadius: 10,
      padding: 'calc(12px + .5vw)',
      fontSize: 'calc(20px + .5vw)',
      cursor: 'pointer',
      marginTop: '19px',
      letterSpacing: '3px',
      color: 'white',
      flex: '1 0 100%'
    }

    //home page earth image
    let img = require(`images/landing_page_graphic.svg`);

    let earthImgDiv = {
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      flex: '1 0 auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>
        <div className="intro-div" style={introDiv}>
          <h1 style={h1}>Welcome to Earthly!</h1>
          <h3 style={h3}>Explore world rankings and learn about countries.</h3>
          <Link to={`/category`}>
            <button
            style={startButton}
            className={['button-shadow', hoverClass].join(' ')}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            >Start</button>
          </Link>
        </div>
        <div className='earth-img-div' style={earthImgDiv}>
        </div>
      </div>

    );
  }
}

export default Home;
