import React, { Component } from 'react';
import RankingEntity from 'components/RankingEntity';
import Chart from 'components/Chart';
import Breadcrumb from 'components/Breadcrumb';
import { Link } from "react-router-dom";

class Result extends Component {

  constructor(props){
    super(props);
    this.state = {
        category: props.match.params.catName, //get clicked category from URL
        topic: props.match.params.topName //get clicked topic from URL
      }
  } //above is default event handler found on React doc

  render(){

    /* CSS */
    let rankingInfo = {
      display: 'flex',
      flexFlow: 'row nowrap',
    };

    let chartHeader = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 30px'
    }

    let backButton = {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.8em',
      cursor: 'pointer'
    }

    let resultChart = {
      maxWidth: '1024px', /*only for this element so breadcrumb is 100%*/
      margin: '5% 5% 20px 5%',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid darkgrey',
      marginTop: '60px',
    }

    /* JS */
    let category = this.state.category;
    let topic = this.state.topic;
    let renderData = [];

    renderData.push(
      <div className="result-chart" key="result-chart" style={resultChart}>
          <div className="chart-header" style={chartHeader}>
            <Link to={`/category/${category}`}><button style={backButton}>{'<'}</button></Link>
            <h2>{capitalizeAllLetters(topic)}</h2>
            <span>unit</span>
          </div>
          <div className="ranking-info" style={rankingInfo}>
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
      <div className="result">
        <Breadcrumb category={category} topic={topic} />
        {renderData}
      </div>
    )
  }
}

export default Result;
