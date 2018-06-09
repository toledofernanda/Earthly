import React, { Component } from 'react';
import { db } from './Db';

class EntityInfo extends Component {
  render(){
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component
    let renderData = [];

    for(let item of db){
      if (item.entity === entityName){
        renderData.push(
          <div className="entity-data">
            <h2>Capital: {item.capital}</h2>
            <h2>Population: {item.population}</h2>
            <h2>Language: {item.language}</h2>
            <h2>Greeting: {item.greeting}</h2>
          </div>
        );
      }
    }
    return (
     <div>
      {renderData}
     </div>
   );
 }}

export default EntityInfo;
