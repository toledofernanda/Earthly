import React, { Component } from 'react';
import { db } from './Db';
import RankingEntity from 'components/RankingEntity';
import Chart from 'components/Chart';

class Result extends Component {
  render(){
    let category = this.props.category;
    let topic = this.props.topic;
    let renderData = [];

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
        {renderData}
      </div>
    )
  }
}

export default Result;
