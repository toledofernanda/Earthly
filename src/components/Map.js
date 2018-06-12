import React, { Component } from 'react';
// import './Map.css';

class Map extends Component {
  render() {
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component

    //source for map according to place selected
    let src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCya9jJUDlyKJcJwRQNcMvWkfKaZ-3PDiA&q=${entityName}`;

    return (
      <div className="toggle-map">
        <iframe
            title={entityName}
            style= {{width: 100 + '%', height: 450 + 'px', border: 0, frameborder: 0}}
            src={src}>
        </iframe>
      </div>
    );
  }

}

export default Map;
