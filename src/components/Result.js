import React, { Component } from 'react';
import Chart from 'components/Chart';
import Breadcrumb from 'components/Breadcrumb';
import BackButton from 'components/BackButton';
import Unit from 'components/Unit';
import { Link } from "react-router-dom";
import { db } from './Db';

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
    let resultOuterDiv = {
      display: 'flex',
      justifyContent: 'center'
    }

    let rankingInfo = {
      // display: 'flex',
      // flexFlow: 'row nowrap',
    };

    let chartHeader = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 30px'
    }

    let resultChart = {
      maxWidth: '1024px', /*only for this element so breadcrumb is 100%*/
      margin: '60px 5% 20px 5%',
      backgroundColor: 'white',
      borderRadius: 30,
      border: '1px solid darkgrey',
    }

    let topicD = {
      flex: '0 0 60%'
    }

    /* JS */
    let category = this.state.category;
    let topic = this.state.topic;
    let topicDescription = db[category][topic][0]['topic_description'];
    let unit = db[category][topic][0]['unit'];
    let renderData = [];

    renderData.push(
      <div className="result-chart" key="result-chart" style={resultChart}>
          <div className="chart-header" style={chartHeader}>
            <BackButton category={category} component={'result'} />
            <h2 style={topicD} >{topicDescription}</h2>
            <Unit unit={unit} />
          </div>
          <div className="ranking-info" style={rankingInfo}>
            {/* <RankingEntity category={category} topic={topic} /> */}
            <Chart category={category} topic={topic} />
          </div>
      </div>
    )

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
      <div className="result" style={resultOuterDiv}>
        <Breadcrumb category={category} topic={topic} />
        {renderData}
      </div>
    )
  }
}

export default Result;
