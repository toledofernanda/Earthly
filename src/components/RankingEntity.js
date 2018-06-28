import React, { Component } from 'react';
import { db } from './Db';
import Flag from 'components/Flag';
import EntityName from 'components/EntityName';
import TooltipScreen from 'components/TooltipScreen';

class RankingEntity extends Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render(){

    /* CSS */
    let rankingEntity = {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      height: '90px',
      width: '95px'
    }

    let rankingEntities = {
      padding: '10px'
    }

    let orderStyle = {
      fontSize: '.8em'
    }

    /* JS */
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let subCat = db[category][topic];
    let entityName = "";
    let entities = [];
    let order = 1;

    // get all entities that appear on that category/topic
    for (let entity of subCat) {
      entityName = entity["entity_name"]; //get entityName to get info

      if(this.state.tooltipOpen) {
        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order">
              <span style={orderStyle} >{order}</span>
            </div>
            <div className="entity-flag-name" onClick={this.toggleTooltip}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
            <TooltipScreen entityName={entityName} category={"general"} topic={"entity_info"} />
          </div>
        )
      } else {
        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order">
              <span style={orderStyle} >{order}</span>
            </div>
            <div className="entity-flag-name" onClick={this.toggleTooltip}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )
      }


      order++;
    }

    return (
      <div className="ranking-entities" key="ranking-entities" style={rankingEntities}>
          {entities}
      </div>
    )
  }
}


export default RankingEntity;
