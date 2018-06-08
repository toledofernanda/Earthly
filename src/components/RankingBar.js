import React, { Component } from 'react';
// import { db } from './Db';
import RankingIcon from 'components/RankingIcon';

class RankingBar extends Component{
  render(){
    let topic = this.props.topic; //props passed down
    let iconCount = parseInt(this.props.barLength / 5); //supposing No.1 = 100% is 20 icons

    return (
      <div className="ranking-bar">
        <RankingIcon iconCount={iconCount} topic={topic}/>
      </div>
    )
  }
}


export default RankingBar;
