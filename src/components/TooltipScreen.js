import React, { Component } from 'react';
import Map from 'components/Map';
import EntityName from 'components/EntityName';
import EntityInfo from 'components/EntityInfo';

class TooltipScreen extends Component {
  render() {

    /* CSS */
    /* position up and down to rankings except basketball and tidal (long) */
    let tooltipUpStyle = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%', //position relative to flag
      top: '-325px',
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

    /* tooltip centered position for basketball and tidal rankings (short) */
    /* United States / South Korea */
    let centered1 = {
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

    /* Brazil / France */
    let centered2 = {
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

    /* Argentina / Canada */
    let centered3 = {
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

    /* Spain / China */
    let centered4 = {
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

    /* United Kingdom */
    let centered5 = {
      width: '60vw',
      maxWidth: '600px',
      position: 'absolute',
      left: '21%',
      top: '-280px',
      zIndex: '2',
      backgroundColor: 'white',
      padding: '10px 20px 20px 20px',
      borderRadius: '20px',
      border: '1px solid darkgrey',
      marginLeft: '15px',
    }

    let infoMap = {
      display: 'grid',
      gridTemplateColumns: '1fr 25px',
      gridTemplateRows: '40% 60%',
    }

    let entityInfo  = {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
      minWidth: '150px',
      marginRight: '5px'
    }

    let entityMap = {
      flex: '1 0 55%',
      marginTop: '10px',
      gridColumn: '1 / 3',
      gridRow: '2 / 3',
    }

    let closeButtonDiv = {
      height: '25px',
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
    }

    let closeButton = {
      cursor: 'pointer',
      position: 'absolute',
      right: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    /* JS */
    let tooltipUp = this.props.tooltipUp;
    let centeredMobileStyle = this.props.centeredMobileStyle;

    if (tooltipUp) { //if true, tooltip style is set to upward

       if (centeredMobileStyle === '3' && this.props.entityName === 'Argentina') { // if is up and is basketball ranking 3

        return (
          <div className={['tooltip-screen', 'up', centeredMobileStyle].join(' ')} style={centered3}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else if (centeredMobileStyle === '4') { // if is up and is basketball/tidal ranking 4

        return (
          <div className={['tooltip-screen', 'up', centeredMobileStyle].join(' ')} style={centered4}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else if (centeredMobileStyle === '5') { // if is up and is basketball/tidal ranking 5

        return (
          <div className={['tooltip-screen', 'up', centeredMobileStyle].join(' ')} style={centered5}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else {   // if is up and not basketball/tidal ranking
        return (
          <div className={['tooltip-screen', 'up'].join(' ')} style={tooltipUpStyle}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      }
    } else { //if false, tooltip style is set to down

      if (centeredMobileStyle === '1') {  // if is down and is basketball/tidal ranking 1

        return (
          <div className={['tooltip-screen', 'down', centeredMobileStyle].join(' ')} style={centered1}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else if (centeredMobileStyle === '2') { // if is down and is basketball/tidal ranking 2

        return (
          <div className={['tooltip-screen', 'down', centeredMobileStyle].join(' ')} style={centered2}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else if (centeredMobileStyle === '3' && this.props.entityName === 'Canada') { // if is down and is tidal ranking 3

        return (
          <div className={['tooltip-screen', 'down', centeredMobileStyle].join(' ')} style={centered3}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
              </div>
              <div className="entity-map" style={entityMap}>
                <Map entity={this.props.entityName} />
              </div>
            </div>
          </div>
        );
      } else { // if is down and not basketball/tidal ranking
        return (
          <div className={['tooltip-screen', 'down'].join(' ')} style={tooltipDownStyle}>
            <div className="info-map" style={infoMap}>
              <div className="entity-info" style={entityInfo}>
                <EntityName {...this.props} parent={'tooltip'} />
                <EntityInfo {...this.props} category={"general"}  topic={"entity_info"}/>
              </div>
              <div id="close-tooltip" className="close-button" onClick={this.props.toggleTooltip} style={closeButtonDiv}>
                <img src={require(`images/close_button.png`)} style={closeButton}/>
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
