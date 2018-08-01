import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import StepTitle from 'components/StepTitle';
import BackButton from 'components/BackButton';

//This component displays a list of secondary categories (topics)
class TopicFilter extends Component{
  constructor(props){
    super(props);
    this.state = {
      category: props.match.params.catName //get clicked category name from URL
    }
  }

  //scroll window to top when opening new route
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    let outerDiv = {
      maxWidth: 'calc(1024px - 10%)',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      margin: '4% auto',
      backgroundColor: 'white',
      borderRadius: 30,
    }; //style for the outside div of main component

    let filterTopStyle = {
      flex: '1 0 100%',
      padding: '3% 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr',
      boxSizing: 'border-box'
    };

    let category = this.state.category;
    let topicList = [];
    for (let topic in db[category]){
        if(topic !== "entity_info") {
          topicList.push(
            <div key={`${topic}-button`} className = "catStyle">
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
         <div className="topic-list filterDiv">
            {topicList}
          </div>
      </div>
    )
  }
}

export default TopicFilter;
