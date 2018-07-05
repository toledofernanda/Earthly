import React, { Component } from 'react';
import RankingEntity from 'components/RankingEntity';
import Chart from 'components/Chart';
import Breadcrumb from 'components/Breadcrumb';

class Result extends Component {

  constructor(props){
      super(props);
      // let category = props.match.params.catName;//← here
      this.state = {
          category: props.match.params.catName,
          topic: props.match.params.topName //get clicked category name
        }
      // console.log("match obj", props.match)
      // console.log("props obj", this.props.category)
  } //above is default event handler found on React doc

  render(){

    /* CSS */
    let rankingInfo = {
      maxWidth: '1024px',
      margin: 'auto',
      backgroundColor: 'lightgrey',
      borderRadius: 30,
      border: '1px solid darkgrey',
      display: 'flex',
      flexFlow: 'row nowrap',
    };

    let topicInfo = {
      textAlign: 'center'
    }

    let result = {
      width: '100%'
    }

    let resultChart = {
      marginTop: '35px',
      padding: '10px'
    }

    /* JS */
    // console.log("props obj", this.props.category)
    let category = this.props.category;
    let topic = this.state.topic;
    let renderData = [];

    // console.log("result cat", category)

    renderData.push(
      <div className="result-chart" key="result-chart" style={resultChart}>
        <div className="topic-info" style={topicInfo}>
          <h2>{capitalizeAllLetters(topic)}</h2>
        </div>
        <div className="ranking-info" style={rankingInfo}>
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
      <div className="result" style={result}>
        <Breadcrumb category={category} topic={topic} />
        {renderData}
      </div>
    )
  }
}

export default Result;
