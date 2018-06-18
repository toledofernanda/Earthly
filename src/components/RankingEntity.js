import React, { Component } from 'react';
import { db } from './Db';
import Flag from 'components/Flag';
import EntityName from 'components/EntityName';
import TooltipScreen from 'components/TooltipScreen';
import RankingNumber from 'components/RankingNumber';

class RankingEntity extends Component {
  render(){
    let category = this.props.category; //props passed down
    let topic = this.props.topic; //props passed down
    let subCat = db[category][topic];
    let entityName = "";
    let entities = [];

    // get all entities that appear on that category/topic
    for (let entity of subCat) {
      entityName = entity["entity_name"]; //get entityName to get info

      entities.push(
        <div className="ranking-entity" key={entityName} >
          <div className="entity-flag-name">
            <Flag entityName={entityName} category={"general"} topic={"entity_info"} />
            <EntityName entityName={entityName} />
          </div>
          <RankingNumber entityName={entityName} category={category} topic={topic} />
          <TooltipScreen entityName={entityName} category={"general"} topic={"entity_info"} />
        </div>
      )
    }

    return (
      <div className="ranking-entities" key="ranking-entities">
          {entities}
      </div>
    )
  }
}


export default RankingEntity;
