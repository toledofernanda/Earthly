import React, { Component } from 'react';
import {countryData} from './FlagData';
import TooltipScreen from 'components/TooltipScreen';

class Flag extends Component{
	constructor(props) {
		super(props);

		this.toggleTooltip = this.toggleTooltip.bind(this);

		this.state = {
			tooltipOpen: false
		};
	}

	//get flag click and render or not tooltip
	toggleTooltip() {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		});
	}

	render(){

		/* CSS */
		let flagTooltipDiv = {
			maxWidth: '75px'
		}

		let flag = {
			width: '100%',
			maxWidth: '75px',
			height: '100%',
			borderRadius: '5px',
		}

		let countryFlag = {
			maxWidth: '75px'
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
		let myimg; // image to display
		let tooltipUp = this.props.tooltipUp; //check the position of country, if is last two, tooltip shows upward
		let centeredMobileStyle = this.props.centeredMobileStyle; //for basketball ranking

		//get the country flag
			let countryAbb;

			let country = parseCSV(countryData);

			for (let item of country){
				if(item['country'] === entityName){

					countryAbb = item["countryCode"].toLowerCase()
					myimg = <img src={require(`images/flags/${countryAbb}.png`)} style={flag} alt={countryAbb} className='button-shadow' />;
				}
			}

		if(this.state.tooltipOpen) {

			return (
				<div className="flag-tooltip" style={flagTooltipDiv}>
					<div className = "country_flag" onClick={this.toggleTooltip}>
				  	{myimg}
					</div>
					<div className="tooltip">
						<TooltipScreen toggleTooltip={this.toggleTooltip} tooltipUp={tooltipUp} centeredMobileStyle={centeredMobileStyle} entityName={entityName} category={"general"} topic={"entity_info"} className='button-shadow' />
					</div>
				</div>
			 );
		} else {

			return (
				<div className="flag-tooltip">
					<div className = "country_flag" onClick={this.toggleTooltip} style={countryFlag}>
				  	{myimg}
					</div>
				</div>
			 );
		}
	}
}

export default Flag;
