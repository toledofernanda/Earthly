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
      // maxWidth: 'calc(1024px - 10%)',
      // minWidth: '80vw',
      width: '100vw',
      margin: 'auto',
      display: 'flex',
      flexFlow: 'column wrap',
      // justifyContent: 'center',
      alignItems: 'stretch',
      // backgroundColor: 'white',
      // borderRadius: 30,
      textAlign:'center',
      minHeight: '88vh',
    }//style for the outside div of main component


    //
    // let homeDiv = {
    //   display :'flex',
    //   flexFlow: 'column wrap',
    //   justifyContent: 'stretch',
    //
    // }
    //inner content div
    // let mainContent = {
    //   textAlign: 'center',
    //   display: 'flex',
    //   flexFlow: 'column nowrap',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: '7% 7%',
    //   boxSizing: 'border-box'
    // }

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

    let image = {
      display: 'flex',
      alignItems: 'center',
      // textAlign: 'center',
      // flex: '1 1 100%'
    }

    let imgStyle = {
      flex: '0 1 100%',
      height: '20%'
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>

          <h1>Welcome to Earthly!</h1>
          <h3>A site where you can learn about countries and world rankings.</h3>
          <Link to={`/category`}>
            <button
            style={startButton}
            className={['button-shadow', hoverClass].join(' ')}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            >Start</button>
          </Link>
          <div style = {image}>
          <img src={require(`images/landing_page_graphic.svg`)} style = {imgStyle} alt={`chart Sample`}/>
          </div>

      </div>

    );
  }
}

export default Home;
