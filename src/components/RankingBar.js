import React, { Component } from 'react';
// import { db } from './Db';
import RankingIcon from 'components/RankingIcon';
import RankingNumber from 'components/RankingNumber';


// This component calculate the number of icons to be displayed for each bar
class RankingBar extends Component{

  render(){

    /* CSS */
    let rankingBar = {
      marginBottom: '32px',
      maxWidth:'100%'
    }

    /* JS */
    let topic = this.props.topic; //props passed down
    let iconCount;

    if( topic === 'most_soccer_world_cup_champion' | topic === 'basketball_world_cup_gold_medals'){
      iconCount = this.props.barLength;
      console.log(iconCount);
    }else{
      iconCount = parseInt(this.props.barLength / 5, 10); //supposing No.1 = 100% is 20 icons
    }

    return (
      <div className="ranking-bar" key="ranking-bar" style={rankingBar}>
        <RankingIcon iconCount={iconCount} {...this.props}/>
        <RankingNumber {...this.props} />
      </div>
    )
  }
}


export default RankingBar;
