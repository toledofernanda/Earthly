import React, { Component } from 'react';
// import Db from './Db';

class EntityInfo extends Component {
  render(){
    var entityName = this.props.entity; //entity name or item name sent from TooltipScreen component

    let renderData = [];

    for(let item of Db){
      if (item.entity === entityName){
        renderData.push(<div>
          <h2>Capital: {item.capital}</h2>
          <h2>Population: {item.population}</h2>
          <h2>Language: {item.language}</h2>
          <h2>Greeting: {item.greeting}</h2>
          </div>);
      }
    }
    return (
     <div>
      {renderData}
     </div>
   );
 }}

//This array of data is for testing purpose
// I made a separate file Db.js with this array,
//but could not import it properly
//so it is sitting here for now

 let Db = [
       {
       entity:"Japan",
       capital: "Tokyo",
       population: 128000000,
       language: "Japanese",
       greeting: "kon-ni-chiwa"
     },
     {
       entity:"Canada",
       capital: "Ottawa",
       population: 45000000,
       language: "English and French",
       greeting: "Hello / Bon Jour"
     }
 ]

export default EntityInfo;
