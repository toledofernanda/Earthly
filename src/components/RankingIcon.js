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
      width: '3.2vw', // use vw instead of % for firefox
      height: '3.2vw', // use vw instead of % for firefox
      maxWidth: '38px'
    }

    let halfIcon = {
      clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)',
      width: '3.2vw',
      height: '3.2vw'
    }

    let iconCount = this.props.iconCount; //props from RankingBar
    let topic = this.props.topic; //props passed down
    let image;
    let renderData = []; //variable to hold iconCount number of icons

    for(let i=0; i<iconCount; i++){
      image = <img src={require(`images/${topic}_colored.svg`)} alt={`${topic}`} key={`${topic}_${i}`}style={rankingIcon}/>   //image tag for icon, included unique key (required)
      renderData.push(image);
    }

    if(iconCount < 1){
      renderData.push(<img src={require(`images/${topic}_colored.svg`)} alt={`${topic}`} style={halfIcon}/>)
    }

    return (
      <div className="ranking-icon" key="ranking-icon" style={rankingIconsDiv}>
        {renderData}
      </div>
    )
  }
}

export default RankingIcon;
