import React, { Component } from 'react';
import { db } from './Db';
import Flag from 'components/Flag';
import EntityName from 'components/EntityName';

class RankingEntity extends Component {

  render(){

    /* CSS */
    let rankingEntity = {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      height: '90px',
      width: '115px',
      position: 'relative',
      padding: '10px'
    }

    let rankingEntities = {
      backgroundColor: 'lightgrey',
      borderRadius: '0 0 0 30px'
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

      entities.push(
        <div className="ranking-entity" key={entityName} style={rankingEntity}>
          <div className="order">
            <span style={orderStyle} >{order}</span>
          </div>
          <div className="entity-flag-name">
            <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
            <EntityName entityName={entityName} parent={'ranking-entity'} />
          </div>
        </div>
      )

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
