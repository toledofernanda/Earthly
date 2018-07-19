import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FilterButtonText from 'components/FilterButtonText';

//This component displays a secondary category(topics)
class TopicButton extends Component{
  render(){
    let buttonStyle = {
      // flex: '0 0 33.33%',
      textAlign: 'center',
      // margin: '10px'
    };


    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down

    return (
      <div style = {buttonStyle}>
        <div className = "topic-button" topic={topic}>
          <Link to={`/category/${category}/${topic}`}>
            <img src={require(`images/${topic}.svg`)}  alt={topic}  className = {['button-shadow','buttonIconTopic', `${category}Color`].join(' ')}  />
          </Link>
            <FilterButtonText category={category} topic={topic}/>
        </div>

    </div>
   );
 }
}

export default TopicButton;
