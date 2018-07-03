import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import { Route } from "react-router-dom";
import Result from 'components/Result';
import StepTitle from 'components/StepTitle';


//This component displays a list of secondary categories (topics)
class TopicFilter extends Component{
  constructor(props){
      super(props);
      this.state = {
          isSelected: false,
          category: props.match.params.catName //get clicked category name
        }
      this.select = this.select.bind(this);
  }
  select() {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
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
    let category = this.state.category;
    let topicList = [];
    //Issue: isSelected value is not used effectively yet
    for (let topic in db[category]){
        topicList.push(
          <div key={`${topic}-button`} style={catStyle}>
            <TopicButton category={category} topic={topic} select={this.select} />
          </div>
        );
    }
    return (
      <div className="topic-filter" key="topic-filter" style = {outerDiv}>
        {this.state.isSelected ?
          <Route path={`/category/${category}/:topName`} render={(props) => (
          <Result {...props} category={category}/>)}/>
        :
          <div className="topic-list" style={divStyle}>
            <StepTitle />
            {topicList}
          </div>
        }
      </div>
    )
  }
}

export default TopicFilter;
