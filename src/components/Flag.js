import React, { Component } from 'react';
import {countryData} from './FlagData';
import {db} from './Db';
import TooltipScreen from 'components/TooltipScreen';


class Flag extends Component{
	constructor(props) {
		super(props);

		this.toggleTooltip = this.toggleTooltip.bind(this);

		this.state = {
			tooltipOpen: false
		};
	}

	toggleTooltip() {
		console.log("clicked flag");
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		});
		console.log("tooltipOpen");
	}

	render(){

		/* CSS */
		let flag = {
			width:'75px',
			height:'43px',
			borderRadius: '5px'
		}

		let nepalFlag = {
			paddingRight:'20px',
			height:'43px',
			borderRadius: '5px'
		}

		/* JS */
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


		let entityName = this.props.entityName;
		let category = this.props.category;
    let topic = this.props.topic;
		let nonCountryPic = "mountain";//get a picture that discribes the ranking
		let subCat = db[category][topic]; //always general and topic to check if is a country
		let isCountry = false;//see if the entity is country or not
		let myimg; // image to display

		for (let item of subCat){
			//check if is a country
			// console.log("item['entity_name']", item['entity_name'])
			// console.log("entityName", entityName)
			if(item['entity_name'] === entityName){
				if(item['entity_type'] === "country"){
					isCountry = true;
					// console.log("country");
				} else if(item['entity_type'] === "not_country"){
					// console.log("not a country");
					myimg = <img src={require(`images/notCountryPic/${nonCountryPic}.jpeg`)} style={flag} alt={nonCountryPic} />
				}
			}
		}

		//get the country flag if it's country
		if(isCountry){
			let countryAbb;

			let country = parseCSV(countryData);

			for (let item of country){
				if(item['country'] === entityName){

					// console.log(entityName)
            // console.log(item["countryCode"].toLowerCase());
						countryAbb = item["countryCode"].toLowerCase()
						if(countryAbb == 'np'){
							myimg = <img src={require(`images/flags/${countryAbb}.png`)} style={nepalFlag} alt={countryAbb} />;

						} else{
							myimg = <img src={require(`images/flags/${countryAbb}.png`)} style={flag} alt={countryAbb} />;

						}

				}
			}

		}

		if(this.state.tooltipOpen) {
			console.log('is open');
			return (
				<div className="flag-tooltip">
					<div className = "country_flag" onClick={this.toggleTooltip}>
				  	{myimg}
					</div>
					<div className="tooltip">
						<TooltipScreen toggleTooltip={this.toggleTooltip} entityName={entityName} category={"general"} topic={"entity_info"} />
					</div>
				</div>
			 );
		} else {
			console.log('not open');

			return (
				<div className="flag-tooltip">
					<div className = "country_flag" onClick={this.toggleTooltip}>
				  	{myimg}
					</div>
				</div>
			 );
		}
	}
}

export default Flag;
