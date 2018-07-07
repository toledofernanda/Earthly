import React, { Component } from 'react';
import { db } from './Db';
import RankingBar from 'components/RankingBar';
import Source from 'components/Source';

class Chart extends Component{
  render(){

    /* CSS */
    let chart = {
      // backgroundColor: 'white',
      padding: '20px 20px 10px 20px',
      borderRadius: '0px 30px 30px 0px',
      width: '80vw'
    }

    /* JS */
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let num = []; //an array to hold the percentage value for chart bars
    let entityNames = []; //array to store each entity name
    let source; //source name

    // This component calculates percentage value for entities ranked within 10
    for(let topic in db[category]){
      if (topic === this.props.topic){
        let fields = db[category][topic];

        //smallest rankings
        if ( topic === 'smallest_countries' | topic === 'smallest_population'){
          let base = fields[9].quantity; //quantity of No.10
          num[9] = 100;
          for(let i= 8; i>=0; i--){
            let percent = "";
            percent = (fields[i].quantity)/base;
            num[i] = percent.toFixed(2)*100;
            if (num[i] < 5){
              num[i] = 5; // we need half icon
            }
          }
        } else {
        //get quantity of each entity
          num.push(100); //No.1 is always 100%

          let base = fields[0].quantity; //quantity of No.1
          for(let i=1; i<fields.length; i++){
            let percent = "";
            percent = (fields[i].quantity)/base;
            percent = percent.toFixed(2)*100;
            if (percent < 5){
              percent = 5; // we need half icon
            }
            num.push(percent); //calculated percent value is pushed to the array
          }
        }

        //get entity names
        for (let i = 0; i < fields.length; i++) {
          entityNames.push(fields[i].entity_name);
        }

        //get source names
        source = fields[0].source_name;
      }
    }

    return (
      <div className="chart" key="chart" style={chart}>
        <RankingBar barLength={num[0]} topic={topic} category={category} entityName={entityNames[0]} />
        <RankingBar barLength={num[1]} topic={topic} category={category} entityName={entityNames[1]} />
        <RankingBar barLength={num[2]} topic={topic} category={category} entityName={entityNames[2]} />
        <RankingBar barLength={num[3]} topic={topic} category={category} entityName={entityNames[3]}/>
        <RankingBar barLength={num[4]} topic={topic} category={category} entityName={entityNames[4]} />
        <RankingBar barLength={num[5]} topic={topic} category={category} entityName={entityNames[5]} />
        <RankingBar barLength={num[6]} topic={topic} category={category} entityName={entityNames[6]} />
        <RankingBar barLength={num[7]} topic={topic} category={category} entityName={entityNames[7]} />
        <RankingBar barLength={num[8]} topic={topic} category={category} entityName={entityNames[8]} />
        <RankingBar barLength={num[9]} topic={topic} category={category} entityName={entityNames[9]} />
        <Source source={source} />
      </div>
    )
  }
}


export default Chart;
