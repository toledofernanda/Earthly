import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';

class TooltipScreen extends Component {
  render() {
    return (
      <div className="tooltip-screen">
        <div className="entity-info">
          <EntityName {...this.props} />
          <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
        </div>
        <div className="entity-map">
          <Map entity={this.props.entityName} />
        </div>
      </div>
    );
  }

}

export default TooltipScreen;
