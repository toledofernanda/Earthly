import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import StepTitle from 'components/StepTitle';
import { Link } from "react-router-dom";

//This component displays a list of secondary categories (topics)
class TopicFilter extends Component{
  constructor(props){
    super(props);
    this.state = {
      category: props.match.params.catName //get clicked category name from URL
    }
  }

  render(){
    let divStyle = {
      maxWidth: '1024px',
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid black',
      padding: '7% 20%',
      margin: '5%',
      marginBottom: 0,
      boxSizing: 'border-box'
    }; //style for the inside div of main component
    let outerDiv = {
      width: '100%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center'
    }; //style for the outside div of main component
    let catStyle = {
      flex: '0 0 33.33%'
    }

    let backButton = {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.8em',
      cursor: 'pointer'
    }

    let category = this.state.category;
    let topicList = [];
    //Issue: isSelected value is not used effectively yet
    for (let topic in db[category]){
        //if topic is entity_info don't display it on topic list, we just use it for tooltip component
        if(topic !== "entity_info") {
          topicList.push(
            <div key={`${topic}-button`} style={catStyle}>
              <TopicButton category={category} topic={topic}  />
            </div>
          );
        }
    }
    return (
      <div className="topic-filter" key="topic-filter" style = {outerDiv}>
          <div className="topic-list" style={divStyle}>
            <Link to={`/category`}><button style={backButton}>{'<'}</button></Link>
            <StepTitle />
            {topicList}
          </div>
      </div>
    )
  }
}

export default TopicFilter;
