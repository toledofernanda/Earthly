import React, { Component } from 'react';
import { db } from './Db';

class EntityInfo extends Component {
  render(){

    /* CSS */
    let infoUl = {
      margin: '0',
      padding: '0',
    }

    let infoLi = {
      listStyleType: 'none',
      fontSize: 'calc(8px + .4vw)', // responsive
      margin: '5px 0'
    }

    /* JS */
    let category = this.props.category; //sent through parent component
    let topic = this.props.topic; //sent through parent component
    let entityName = this.props.entityName; //entity name or item name sent from TooltipScreen component
    let renderData = [];

    // get topic object
    let subCat = db[category][topic];
    if (topic === "entity_info") { //if is entity_info topic, just print info about certain entity
      for (let propObj of subCat) { //each prop inside topic array
        if (propObj["entity_name"] === entityName) { //just print info about entity selected
            if (propObj["entity_type"] === "country") { //if is a country
            renderData.push(
                <div className="entity-info country" key="entity-info" >
                  <ul style={infoUl}>
                    <li style={infoLi} ><b>Capital: </b>{propObj["capital"]}</li>
                    <li style={infoLi}><b>Population: </b>{numberWithCommas(propObj["population"])}</li>
                    <li style={infoLi}><b>Language: </b>{propObj["language"]}</li>
                    <li style={infoLi}><b>Greeting: </b>{propObj["greeting"]}</li>
                  </ul>
                </div>
            );
          } else { //if is not a country
            renderData.push(
              <div className="entity-info not-country" key="entity-info">
                <ul style={infoUl}>
                  <li style={infoLi}><b>Location: </b>{propObj["location"]}</li>
                  <li style={infoLi}><b>{capitalizeFirstLetter(propObj["label"])}: </b>{propObj["quantity"]} {propObj["unit"]}</li>
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

    function numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
     <div className="entitiesInfo">
        {renderData}
     </div>
   );
 }}

export default EntityInfo;
