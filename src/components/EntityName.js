import React, { Component } from 'react';
import { db } from './Db';

class EntityName extends Component {
  render(){
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component
    let heading = "";

    for(let item of db){
      if (item.entity  === entityName){
        heading = <h1>{item.entity}</h1>;
      }
    }
    return (
     <div className="entity-name">
      {heading}
     </div>
   );
 }}

export default EntityName;
