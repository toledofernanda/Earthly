import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';

class TooltipScreen extends Component {
  render() {

    /* CSS */
    let tooltip = {
      width: '40vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '120px',
      top: '10px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '0 20px 20px 20px',
      border: '1px solid darkgrey',
    }

    let infoMap = {
      display: 'flex',
      flexFlow: 'row wrap',
    }

    let entityInfo  = {
      flex: '1 0 40%',
      minWidth: '150px'
    }

    let entityMap = {
      flex: '1 0 55%',
      marginTop: 30
    }

    let closeButton = {
      fontSize: '1em',
      color: 'white',
      backgroundColor: 'red',
      width: '25px',
      height: '25px',
      borderRadius: 5,
      border: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'absolute',
      right: 20,
      marginBottom: '10px'
    }

    return (
      <div className="tooltip-screen" style={tooltip}>
        <div className="close-button">
          <button id="close-tooltip" style={closeButton} onClick={this.props.toggleTooltip}>x</button>
        </div>
        <div className="info-map" style={infoMap}>
          <div className="entity-info" style={entityInfo}>
            <EntityName {...this.props} parent={'tooltip'} />
            <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
          </div>
          <div className="entity-map" style={entityMap}>
            <Map entity={this.props.entityName} />
          </div>
        </div>
      </div>
    );
  }

}

export default TooltipScreen;
