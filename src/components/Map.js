import React, { Component } from 'react';
// import './Map.css';

class Map extends Component {
  render() {
    /* CSS */
    let toggleMap = {
      height: '100%'
    }

    /* JS */
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component

    //source for map according to place selected
    let src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCya9jJUDlyKJcJwRQNcMvWkfKaZ-3PDiA&q=${entityName}`;

    return (
      <div className="toggle-map" style={toggleMap}>
        <iframe
            title={entityName}
            style= {{width: 100 + '%', height: 200 + 'px', border: 0, frameborder: 0}}
            src={src}>
        </iframe>
      </div>
    );
  }

}

export default Map;
