import React, { Component } from 'react';

class EntityName extends Component {
  render(){
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component
    let heading = "";

    heading = <h1>{entityName}</h1>;

    return (
     <div className="entity-name">
        {heading}
     </div>
   );
 }}

export default EntityName;
