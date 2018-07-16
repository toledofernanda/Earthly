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
      height: '10%',
      minHeight: '70px',
      width: '100%',
      position: 'relative',
      paddingRight: '10px',
      paddingLeft: '10px',
      marginBottom: '5px'
    }

    let rankingEntities = {
      flex: '1 1 20%',
      paddingTop:'10px',
      backgroundColor: 'lightgrey',
      borderRadius: '0 0 0 30px',
      boxSizing: 'border-box',
      height: 'fit-content',
      paddingBottom: '15px',
      maxWidth: '127px'
    }

    let orderStyle = {
      fontSize: 'calc(0.5em + .5vw)',
      flex: '1 1 20%',
      paddingBottom: '15px',
      paddingRight: '5px'
    }

    let entityFlagName = {
      flex: '1 1 80%'
    }

    /* JS */
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let subCat = db[category][topic];
    let entityName = "";
    let entities = [];
    let order = 1;
    let specificOrder; //for cases where there are ties on ranking

    if(topic === 'basketball_world_cup_gold_medals') {
      specificOrder = [1,2,3,3];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )

        index++;
      }
    } else if(topic === 'most_soccer_world_cup_champion') {
      specificOrder = [1,2,2,3,3,4,4,4];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )

        index++;
      }
    } else if(topic === 'highest_temperature') {
      specificOrder = [1,2,3,3,3,4,5,6,7,8];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )

        index++;
      }
    } else if(topic === 'most_earthquakes') {
      specificOrder = [1,2,3,4,5,6,7,8,9,9];
      let index = 0;

      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{specificOrder[index]}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )

        index++;
      }
    } else {
      // get all entities that appear on that category/topic
      for (let entity of subCat) {
        entityName = entity["entity_name"]; //get entityName to get info

        entities.push(
          <div className="ranking-entity" key={entityName} style={rankingEntity}>
            <div className="order" style={orderStyle}>
              <span>{order}</span>
            </div>
            <div className="entity-flag-name" style={entityFlagName}>
              <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
              <EntityName entityName={entityName} parent={'ranking-entity'} />
            </div>
          </div>
        )

        order++;
      }
    }



    return (
      <div className="ranking-entities" key="ranking-entities" style={rankingEntities}>
          {entities}
      </div>
    )
  }
}


export default RankingEntity;
