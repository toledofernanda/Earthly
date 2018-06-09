import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';
// import './Map.css';

class TooltipScreen extends Component {
  render() {
    return (
      <div className="tooltip-screen">
        <div className="entity-info">
          <EntityName entity={this.props.entityName} />
          <EntityInfo entity={this.props.entityName} />
        </div>
        <div className="entity-map">
          <Map entity={this.props.entityName} />
        </div>
      </div>
    );
  }

}

export default TooltipScreen;
