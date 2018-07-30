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
    // console.log("hovered")
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
      margin: '0 auto',
      marginBottom: '0',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-between',
      height: 'calc(100vh - 120px)', //100% height minus header and footer height
      minHeight: '446px',
      padding: '20% 4% 0 4%',
      boxSizing: 'border-box',
      // backgroundColor: 'white',
      // borderRadius: 30,
      textAlign:'center'
    }//style for the outside div of main component

    let h1 = {
      fontSize: 'calc(22px + .8vw)',
      flex: '1 0 16%',
    }

    let h3 = {
      fontSize: 'calc(12px + .8vw)',
      flex: '1 0 16%',
    }

    let startButton = {
      border: 'none',
      backgroundColor: 'rgb(0,184,166)',
      borderRadius: 10,
      padding: '20px',
      fontSize: 'calc(20px + .5vw)',
      cursor: 'pointer',
      marginTop: '19px',
      letterSpacing: '3px',
      color: 'white',
      flex: '1 0 16%'
    }

    let image = {
      flex: '1 0 50%',
      // minHeight: '50%'
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      // height: '100%'
    }

    let imgStyle = {
      // flex: '0 0 100%',
      width: '50vw',
      minWidth: '350px',
      maxWidth: '820px',
      height: 'auto'
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>
        <div>
          <h1 style={h1}>Welcome to Earthly!</h1>
          <h3 style={h3}>Explore world rankings and learn about countries in the world.</h3>
        </div>
        <div>
          <Link to={`/category`}>
            <button
            style={startButton}
            className={['button-shadow', hoverClass].join(' ')}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            >Start</button>
          </Link>
        </div>
        <div style = {image}>
          <img src={require(`images/landing_page_graphic.svg`)} style = {imgStyle} alt={`chart Sample`}/>
        </div>
      </div>

    );
  }
}

export default Home;
