import React, { Component } from 'react';
import {countryData} from './FlagData';

class Flag extends Component{
	render(){
		function parseCSV(data) {

		 let records = data.split('\n'); //create array based on each line
		 let results = [];

		 for (let record of records) {
		   results.push(record.split(',')); //create second level of array based on commas
		 }

		 let headers = results[0]; //get headers from first record (line)
		 results.splice(0, 1); //remove headers line from results array

		 let dataResult = [];
		 let header1 = headers[0];
		 let header2 = headers[1];
		 let header3 = headers[2];
		 let header4 = headers[3];

		 for(let record of results) {
		   let decorator = {}; //create an object for each record

		   for(let field of record) {
		     if(record.indexOf(field) === 0) { //get the header of each field and attach as a property to the values
		       decorator[header1] = field; //assign value to each property according to headers given
		     } else if(record.indexOf(field) === 1) {
		       decorator[header2] = field;
		     } else if(record.indexOf(field) === 2) {
		       decorator[header3] = field;
		     } else {
		       decorator[header4] = field;
		     }
		   }
		   dataResult.push(decorator);
		 }
		 return dataResult;
		}

		let topic = this.props.country;
		let countryAbb;

		let country = parseCSV(countryData);

		console.log(country);
		for (let item of country){
			if(item['country'] == topic){
      for(let prop in item) {
            console.log(item["countryCode"].toLowerCase());
						countryAbb = item["countryCode"].toLowerCase()
    }
			}
		}

	  let myimg = <img src={require(`images/flags/${countryAbb}.png`)} />;

		return (
			<div className = "country_flag">
		  	{myimg}
			</div>
		  	);

	}


}

export default Flag;
