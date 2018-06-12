import React, { Component } from 'react';
import { db } from './Db';

class Ranking extends Component{
	render(){
		let entityName = this.props.entity;
		let category = this.props.category;
    	let topic = this.props.topic;  
		let subCat = db[category][topic];
		let result = [];

		for (let item of subCat){
			//show quantity for ranking
			if((item['entity_name'] === entityName) && item.hasOwnProperty('ranking')){ //checks if the property has ranking and number 
				result.push(<li>{item['quantity']}</li>)
				console.log(result);
			//show population for general informatio for each country
			} else if((item['entity_name'] === entityName) && item.hasOwnProperty('capital')){
				result.push(<li>{item['quantity']}</li>)
				console.log(result);
			}	
		}

		return(
			<div className = "ranking_quantity">

			
					{result} 
				
			</div>
			)
	}
}

export default Ranking;
