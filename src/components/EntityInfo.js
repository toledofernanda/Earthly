import React, { Component } from 'react';
import { db } from './Db';

class EntityInfo extends Component {
  render(){
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component
    let renderData = [];
    let category = this.props.category;
    let topic = this.props.topic; 

    let subCat = db[category][topic];
    console.log(subCat);


    for(let item of subCat){
      if(item['entity_name'] == entityName)
     for(let prop in item) {
            console.log(`${prop}: ${item[prop]}`);
            renderData.push(<li>{prop}: {item[prop]}</li>);

    }
    }
    
    return (
     <div>
      <ul>
      {renderData}
      </ul>
     </div>
   );
 }}

export default EntityInfo;