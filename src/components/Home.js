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
      height: 'calc(100vh - 120px)',
      margin: '0 auto',
      marginBottom: '0',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      // backgroundColor: 'white',
      // borderRadius: 30,
      textAlign:'center'
    }//style for the outside div of main component

    let h1 = {
      paddingTop: '4%',
      fontSize: 'calc()'
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
      flex: '1 0 100%'
    }

    let image = {
      flex: '1 0 auto',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }

    let imgStyle = {
      // flex: '0 0 100%',
      width: '40vw'
    }

    /* JS */
    const hoverClass = this.state.isHovered ? "start-hover" : "";

    return (
      <div className="main" style={mainDiv}>
        <div>
          <h1 style={h1}>Welcome to Earthly!</h1>
          <h3>Explore world rankings and learn about countries in the world.</h3>
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
