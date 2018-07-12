import React, { Component } from 'react';

//This component renders icons for a ranking chart bar
class RankingIcon extends Component{
  render(){
    let rankingIconsDiv = {
      display: 'flex',
      boxSizing: 'border-box',
      flexFlow: 'row nowrap' //so they don't wrap to next line
    }
    let rankingIcon = {
      flex: '0 1 auto',
      maxWidth: '5%',
      height: 'auto'
    }

    let halfIcon = {
      // clipPath: 'inset(10px 20px 30px 40px)'
      width: '10px'
    }

    let iconCount = this.props.iconCount; //props from RankingBar
    let topic = this.props.topic; //props passed down
    let image =  <img src={require(`images/${topic}.png`)} alt={`${topic}`} style={rankingIcon}/>   //image tag for icon
    let renderData = []; //variable to hold iconCount number of icons

    for(let i=0; i<iconCount; i++){
      renderData.push(image);
    }
    //
    // if(iconCount < 1){
    //   renderData.push(<img src={require(`images/${topic}.png`)} alt={`${topic}`} style={halfIcon}/>)
    // }

    return (
      <div className="ranking-icon" key="ranking-icon" style={rankingIconsDiv}>
        {renderData}
      </div>
    )
  }
}

export default RankingIcon;
