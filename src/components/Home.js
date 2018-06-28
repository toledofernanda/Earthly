import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    let main = {
      margin: 'auto',
      width: '1024px',
      height: '70vh',
      textAlign: 'center',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    }

    let startButton = {
      border: 'none',
      backgroundColor: 'orange',
      borderRadius: 10,
      padding: '20px',
      fontSize: '1.9em',
      cursor: 'pointer'
    }

    return (
      <div className="main" style={main}>
        <h1>Welcome to Earthly!</h1>
        <h3>Learn about world rankings and countries</h3>

        <Link to={`/category`}><button style={startButton}>START</button></Link>
      </div>

    );
  }
}

export default Home;
