import React, { Component } from "react";

class Unit extends Component {
  render() {

    /* JS */
    let unit = this.props.unit;
    let renderData = '';

    if(unit !== 'none') {
      renderData = unit;
    }

    return (
      <div className="unit">
        {renderData}
      </div>
    );

  }
}

export default Unit;
