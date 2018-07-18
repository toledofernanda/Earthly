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
      width: '5%',
      height: '5%'
    }

    let halfIcon = {
      clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
      width: '5%',
      height: '5%'
    }

    let iconCount = this.props.iconCount; //props from RankingBar
    let topic = this.props.topic; //props passed down
    let image =  <img src={require(`images/${topic}_colored.svg`)} alt={`${topic}`} style={rankingIcon}/>   //image tag for icon
    let renderData = []; //variable to hold iconCount number of icons

    for(let i=0; i<iconCount; i++){
      renderData.push(image);
    }

    if(iconCount < 1){
      renderData.push(<img src={require(`images/${topic}_colored.svg`)} alt={`${topic}`} style={halfIcon}/>)
    }
// console.log("ranking icon", image)
    return (
      <div className="ranking-icon" key="ranking-icon" style={rankingIconsDiv}>
        {renderData}
      </div>
    )
  }
}

export default RankingIcon;
