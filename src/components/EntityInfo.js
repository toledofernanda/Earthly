import React, { Component } from 'react';
import { db } from './Db';

class EntityInfo extends Component {
  render(){
    let category = this.props.category; //sent through parent component
    let topic = this.props.topic; //sent through parent component
    let entityName = this.props.entity; //entity name or item name sent from TooltipScreen component
    let renderData = [];
    let category = this.props.category;
    let topic = this.props.topic; 

    // get topic object
    let subCat = db[category][topic];

    if (topic === "entity_info") { //if is entity_info topic, just print info about certain entity
      for (let propObj of subCat) { //each prop inside topic array
        if (propObj["entity_name"] === entityName) { //just print info about entity selected
          if (propObj["entity_type"] === "country") { //if is a country
            renderData.push(
                <div className="entity-info country" key="entity-info">
                  <ul>
                    <li><b>Capital: </b>{propObj["capital"]}</li>
                    <li><b>Population: </b>{numberWithCommas(propObj["quantity"])} {propObj["unit"]}</li>
                    <li><b>Language: </b>{propObj["language"]}</li>
                    <li><b>Greeting: </b>{propObj["greeting"]}</li>
                  </ul>
                </div>
            );
          } else { //if is not a country
            renderData.push(
              <div className="entity-info not-country" key="entity-info">
                <ul>
                  <li><b>Location: </b>{propObj["location"]}</li>
                  <li><b>{capitalizeFirstLetter(propObj["label"])}: </b>{numberWithCommas(propObj["quantity"])} {propObj["unit"]}</li>
                </ul>
              </div>
            );
          }
        }
      }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
     <div>
        {renderData}
     </div>
   );
 }}

export default EntityInfo;