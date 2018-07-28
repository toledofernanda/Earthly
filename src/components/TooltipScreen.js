import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';

class TooltipScreen extends Component {
  render() {

    /* CSS */
    let tooltipUpStyle = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%', //position relative to flag
      top: '-340px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px 20px 20px 0',
      border: '1px solid darkgrey',
      marginLeft: '15px'
    }

    let tooltipDownStyle = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%', //position relative to flag
      top: '10px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '0 20px 20px 20px',
      border: '1px solid darkgrey',
      marginLeft: '15px'
    }

    /* United States */
    let basket1 = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%',
      top: '-100px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px',
      border: '1px solid darkgrey',
      marginLeft: '15px',
    }

    /* Brazil */
    let basket2 = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%',
      top: '-155px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px',
      border: '1px solid darkgrey',
      marginLeft: '15px',
    }

    /* Argentina */
    let basket3 = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%',
      top: '-210px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px',
      border: '1px solid darkgrey',
      marginLeft: '15px',
    }

    /* Spain */
    let basket4 = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%',
      top: '-260px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px',
      border: '1px solid darkgrey',
      marginLeft: '15px',
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
      fontSize: '16px',
      color: 'white',
      backgroundColor: 'red',
      width: '25px',
      height: '24px',
      borderRadius: 5,
      border: 'none',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'absolute',
      right: 20,
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    /* JS */
    let tooltipUp = this.props.tooltipUp;
    let basketMobileStyle = this.props.basketMobileStyle;

    console.log('tts', tooltipUp)
    console.log('basketMobileStyle', basketMobileStyle)

    if (tooltipUp) { //if true, tooltip style is set to upward
      console.log('tooltip up')

      if (basketMobileStyle === '1') {  // if is up and is basketball ranking 1

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket1}>
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
      } else if (basketMobileStyle === '2') { // if is up and is basketball ranking 2

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket2}>
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
      } else if (basketMobileStyle === '3') { // if is up and is basketball ranking 3

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket3}>
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
      } else if (basketMobileStyle === '4') { // if is up and is basketball ranking 4

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket4}>
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
      } else {   // if is up and not basketball ranking
        return (
          <div className={['tooltip-screen', 'up'].join(' ')} style={tooltipUpStyle}>
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
    } else { //if false, tooltip style is set to down
      console.log('tooltip down')

      if (basketMobileStyle === '1') {  // if is up and is basketball ranking 1

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket1}>
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
      } else if (basketMobileStyle === '2') { // if is up and is basketball ranking 2

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket2}>
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
      } else if (basketMobileStyle === '3') { // if is up and is basketball ranking 3

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket3}>
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
      } else if (basketMobileStyle === '4') { // if is up and is basketball ranking 4

        return (
          <div className={['tooltip-screen', 'up', basketMobileStyle].join(' ')} style={basket4}>
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
      } else { // if is down and not basketball ranking
        return (
          <div className={['tooltip-screen', 'down'].join(' ')} style={tooltipDownStyle}>
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
  }

}

export default TooltipScreen;
