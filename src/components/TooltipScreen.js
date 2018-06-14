import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';

class TooltipScreen extends Component {
  render() {
    return (
      <div className="tooltip-screen">
        <div className="entity-info">
          <EntityName entity={this.props.entityName} />
          <EntityInfo entity={this.props.entityName} category={this.props.category} topic={this.props.topic} />
        </div>
        <div className="entity-map">
          <Map entity={this.props.entityName} />
        </div>
      </div>
    );
  }

}

export default TooltipScreen;
