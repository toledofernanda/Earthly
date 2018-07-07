import React, { Component } from 'react';
// import { db } from './Db';
import RankingIcon from 'components/RankingIcon';
import RankingNumber from 'components/RankingNumber';


// This component calculate the number of icons to be displayed for each bar
class RankingBar extends Component{

  render(){

    /* CSS */
    let rankingBar = {
      marginBottom: '20px',
      maxWidth:'100%'
    }

    /* JS */
    let iconCount = parseInt(this.props.barLength / 5); //supposing No.1 = 100% is 20 icons

    return (
      <div className="ranking-bar" key="ranking-bar" style={rankingBar}>
        <RankingIcon iconCount={iconCount} {...this.props}/>
        <RankingNumber {...this.props} />
      </div>
    )
  }
}


export default RankingBar;
