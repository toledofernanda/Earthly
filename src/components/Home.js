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
      maxWidth: 'calc(1024px - 10%)',
      margin: '4% auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: 'white',
      borderRadius: 30,
      textAlign:'center',
      height: '70vh'
    }//style for the outside div of main component

    //inner content div
    let mainContent = {
      // width: '100%',
      // height: '100%',
      // minHeight: '50vh',
      textAlign: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'white',
      // borderRadius: 30,
      // border: '1px solid darkgrey',
      padding: '7% 7%',
      // margin: '5%',
      // marginBottom: 0,
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

    let screenshots = {
      display: 'flex',
      flexFlow: 'row nowrap'
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>
        <div className="main-content" style={mainContent}>
          <h1>Welcome to Earthly!</h1>
          <h3>A site where you can learn about countries and world rankings.</h3>
          <div style = {screenshots}>
          <img src={require(`images/chartsSample.png`)} alt={`chart Sample`}/>
          <img src={require(`images/chartSample2.png`)} alt={`chart Sample`}/>
          </div>
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
