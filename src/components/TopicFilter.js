import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';

//This component displays a list of secondary categories (topics)
class TopicFilter extends Component{
  render(){
    let category = this.props.category; //props passed down from CategoryFilter
    let topicList = [];

    for (let topic in db[category]){
      topicList.push(
        <TopicButton topic={topic} />
        );
    }

  return (
    <div className="topic-list">
      {topicList}
    </div>
  )
}
}
export default TopicFilter;
