import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import StepTitle from 'components/StepTitle';
import BackButton from 'components/BackButton';
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
    let outerDiv = {
      maxWidth: '1024px -10%',
      margin: '4%',
      display: 'flex',
      flexFlow: 'column wrap',
      // paddingBottom: '4%',
      justifyContent: 'center',
      // marginTop: '5%',
      // marginBottom: '5%',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '40px 10fr'
      // display: 'flex',
      // flexFlow: 'row nowrap',
      // justifyContent: 'center'
    };

    let divStyle = {
      height: '100%',
      minHeight: '50vh',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // border: '1px solid black',
      padding: '2% 25%',
      // margin: '5%',
      // marginBottom: 0,
      boxSizing: 'border-box'
    };  //style for the inside div of main component

    let catStyle = {
      flex: '0 0 25%',
      paddingBottom: '3%',
      margin: '0 1%',
      marginLeft: 'calc(1% + .5vw)'
    }

    let backButton = {
      width: '19px',
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
         <div className="filterTop" style={filterTopStyle}>
            <BackButton component={'topic'} className='button-shadow' />
            <StepTitle />
         </div>
         <div className="topic-list" style={divStyle}>
            {topicList}
          </div>
      </div>
    )
  }
}  // <Link to={`/category`}><button style={backButton}>{'<'}</button></Link>

export default TopicFilter;
