import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FilterButtonText from 'components/FilterButtonText';

//This component displays a secondary category(topics)
class TopicButton extends Component{
  render(){
    let buttonStyle = {
      flex: '0 0 33.33%',
      textAlign: 'center',
      margin: '10px'
    };
    let buttonIcon = {
      width: '100px',
      height: '100px',
      borderRadius: 20,
      color: 'white',
      boxSizing: 'border-box',
      padding: '20px',
      backgroundColor: 'rgb(240, 80, 39)'
    }

    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down

    return (
      <div style = {buttonStyle}>
        <div className = "topic-button" topic={topic}>
          <Link to={`/category/${category}/${topic}`}>
            <img src={require(`images/${topic}.svg`)}  alt={topic}  style={buttonIcon} />
          </Link>
            <FilterButtonText category={category} topic={topic}/>
        </div>

    </div>
   );
 }
}

export default TopicButton;
