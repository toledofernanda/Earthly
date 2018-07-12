import React, { Component } from "react";

class Unit extends Component {
  render() {

    /* CSS */
    let unitStyle = {
      flex: '0 0 20%',
      fontSize: '.8em',
      textAlign: 'right'
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
