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
    let chartOuterDiv = {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 'calc(1024px - 10%)', //to guarantee that on tablet (1024px) there will be a bit of margin on the sides
      margin: '60px auto',
    }

    let chartHeader = {
      padding: '25px 4%',
      display: 'grid',
      gridTemplateColumns: '20px 1fr',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }

    let resultChart = {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 30
    }

    let topicD = {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
      fontSize: 'calc(14px + 1vw)', // responsive title
      margin: '5px 0'
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
            <h1 style={topicD} >{topicDescription}</h1>
            <Unit unit={unit} />
          </div>
          <div className="ranking-info">
            <Chart category={category} topic={topic} />
          </div>
      </div>
    )

    return (
      <div className="result">
        <div className="breadcrumbOuterDiv">
          <Breadcrumb category={category} topic={topic} />
        </div>
        <div className="chartOuterDiv" style={chartOuterDiv} >
          {renderData}
        </div>
      </div>
    )
  }
}

export default Result;
