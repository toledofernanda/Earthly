import React, { Component } from 'react';
import { db } from './Db';
import TopicButton from 'components/TopicButton';
import { Route } from "react-router-dom";
import Result from 'components/Result';
import StepTitle from 'components/StepTitle';


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

      // console.log("topic state", this.state.isSelected);

      // console.log("category obj", this.state.category)
  } //above is default event handler found on React doc

  select() {
    // console.log(`The topic button was clicked.`);
    // console.log('this is:', this);
    // this.setState({
    //   isSelected: true,
    // });
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));

  // console.log('topic new state', this.state.isSelected);
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
    // console.log("insde top filter");
    let category = this.state.category;
    // let category = this.props.category; //props passed down from CategoryFilter
    let topicList = [];
// console.log("db[this.category]", this.state.category)
    //Issue: isSelected value is not used effectively yet
    for (let topic in db[category]){
        topicList.push(
          <div key={`${topic}-button`} style={catStyle}>
            <TopicButton category={category} topic={topic} select={this.select} />
          </div>
        );
    }

    // function capitalizeAllLetters(string) {
    //   var splitString = string.toLowerCase().split('_');
    //   //loop through each string
    //   for (var i = 0; i < splitString.length; i++) {
    //    // assign it back to the array after capitalized
    //    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
    //   }
    //   // join all strings into an unique string and return it
    //   return splitString.join(' ');
    // }

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
