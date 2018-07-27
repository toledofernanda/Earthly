import React, { Component } from "react";

class Unit extends Component {
  render() {

    /* CSS */
    let unitStyle = {
      gridColumn: '2 / 3',
      gridRow: '2 / 3',
      fontSize: 'calc(8px + .5vw)', /* responsive title */
    }

    /* JS */
    let unit = this.props.unit;
    let renderData = '';

    if(unit !== 'none') {
      renderData = unit;
    }

    return (
      <div className="unit" style={unitStyle}>
        {renderData}
      </div>
    );

  }
}

export default Unit;
