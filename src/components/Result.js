import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RankingEntity from 'components/RankingEntity';
import Chart from 'components/Chart';

class Result extends Component {

  constructor(props){
      super(props);
      // let category = props.match.params.catName;//← here
      this.state = {
          category: props.match.params,
          topic: props.match.params.topName //get clicked category name
        }
      // console.log("match obj", props.match)
      // console.log("props obj", this.props.category)
  } //above is default event handler found on React doc

  render(){
    // console.log("props obj", this.props.category)
    let category = this.props.category;
    let topic = this.state.topic;
    let renderData = [];

    // console.log("result cat", category)

    renderData.push(
      <div className="result" key="result">
        <div className="category-info">
          <h1>{capitalizeAllLetters(category)}</h1>
          <h2>{capitalizeAllLetters(topic)}</h2>
        </div>
        <div className="ranking-info">
          <RankingEntity category={category} topic={topic} />
          <Chart category={category} topic={topic} />
        </div>
      </div>
    )

    function capitalizeAllLetters(string) {
      // console.log("string", string)
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
      <div>
        <Link to={`/`}>Categories</Link> / <Link to={`/${category}`}>{capitalizeAllLetters(category)}</Link> / {capitalizeAllLetters(topic)}
        {renderData}
      </div>
    )
  }
}

export default Result;
