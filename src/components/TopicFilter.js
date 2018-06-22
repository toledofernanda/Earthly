import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Result from 'components/Result';


//This component displays a list of secondary categories (topics)
class TopicFilter extends Component{

//   constructor(props) {
//   super(props);
//   let category = props.match.params.category;//← here
//
//   console.log("category", category)
//
//   this.state = {
//     instructors: [],
//   };
// }
  constructor(props){
      super(props);
      // let category = props.match.params.catName;//← here
      this.state = {
          isSelected: false,
          category: props.match.params.catName //get clicked category name
        }
      this.select = this.select.bind(this);

      console.log("topic state", this.state.isSelected);

      // console.log("category obj", this.state.category)
  } //above is default event handler found on React doc

  select() {
    console.log(`The topic button was clicked.`);
    // console.log('this is:', this);
    // this.setState({
    //   isSelected: true,
    // });
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));

  console.log('topic new state', this.state.isSelected);
  }

  render(){
    // console.log("insde top filter");
    let category = this.state.category;
    // let category = this.props.category; //props passed down from CategoryFilter
    let topicList = [];
// console.log("db[this.category]", this.state.category)
    //Issue: isSelected value is not used effectively yet
    for (let topic in db[category]){
        topicList.push(
          <div key={`${topic}-button`}>
            <TopicButton category={category} topic={topic} select={this.select} />
          </div>
        );
    }

    function capitalizeAllLetters(string) {
      var splitString = string.toLowerCase().split('_');
      //loop through each string
      for (var i = 0; i < splitString.length; i++) {
       // assign it back to the array after capitalized
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
      }
      // join all strings into an unique string and return it
      return splitString.join(' ');
    }

    return (
      <div key="topic-filter">
        {this.state.isSelected ?
          <Route path={`/${category}/:topName`} render={(props) => (
          <Result {...props} category={category}/>)}/>
        :
          <div className="topic-list">
            <Link to={`/`}>Categories</Link> / <Link to={`/${category}`}>{capitalizeAllLetters(category)}</Link>
            {topicList}
          </div>
        }
      </div>
    )
  }
}

export default TopicFilter;
