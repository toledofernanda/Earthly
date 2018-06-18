import React, { Component } from 'react';
import { db } from './Db';
import RankingBar from 'components/RankingBar';

class Chart extends Component{
  render(){
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let num = []; //an array to hold the percentage value for chart bars

    // This component calculates percentage value for entities ranked within 10
    for(let topic in db[category]){
      if (topic === this.props.topic){
        let fields = db[category][topic];
        num.push(100); //No.1 is always 100%

        let base = fields[0].quantity; //quantity of No.1
        for(let i=1; i<fields.length; i++){
          let percent = "";
          percent = (fields[i].quantity)/base;
          percent = percent.toFixed(2)*100;
          num.push(percent); //calculated percent value is pushed to the array
        }
      }
    }

    return (
      <div className="chart">
        <RankingBar barLength={num[0]} topic={topic}/>
        <RankingBar barLength={num[1]} topic={topic} />
        <RankingBar barLength={num[2]} topic={topic} />
        <RankingBar barLength={num[3]} topic={topic}/>
        <RankingBar barLength={num[4]} topic={topic} />
        <RankingBar barLength={num[5]} topic={topic} />
        <RankingBar barLength={num[6]} topic={topic} />
        <RankingBar barLength={num[7]} topic={topic} />
        <RankingBar barLength={num[8]} topic={topic} />
        <RankingBar barLength={num[9]} topic={topic} />
      </div>
    )
  }
}


export default Chart;
