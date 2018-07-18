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
    console.log("hovered")
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render() {

    /* CSS */
    //outer div
    let mainDiv = {
      margin: 'auto',
      display: 'flex',
      paddingBottom: '4%',
      justifyContent: 'center'
    }

    //inner content div
    let mainContent = {
      maxWidth: '1024px',
      width: '100%',
      height: '100%',
      minHeight: '50vh',
      textAlign: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid darkgrey',
      padding: '7% 7%',
      margin: '5%',
      marginBottom: 0,
      boxSizing: 'border-box'
    }

    let startButton = {
      border: 'none',
      backgroundColor: 'rgb(0,184,166)',
      borderRadius: 10,
      padding: '20px',
      fontSize: '1.7em',
      cursor: 'pointer',
      marginTop: '19px',
      letterSpacing: '3px',
      color: 'white',
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>
        <div className="main-content" style={mainContent}>
          <h1>Welcome to Earthly!</h1>
          <h3>Learn about world rankings and countries</h3>
          <Link to={`/category`}>
            <button
              style={startButton}
              className={['button-shadow', hoverClass].join(' ')}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              >Start</button>
          </Link>
        </div>
      </div>

    );
  }
}

export default Home;
