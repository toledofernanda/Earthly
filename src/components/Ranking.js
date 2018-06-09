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
			if(item.hasOwnProperty('ranking') && item.hasOwnProperty('quantity')){ //checks if the property has ranking and number 
				result.push(<li>{item['quantity']}</li>)
				console.log(result);
			} else if (item.hasOwnProperty('population') && (item['entity'] === entityName)){ 
		   
		    result.push(<p>{entityName} has {item['population']} people</p>)
		    console.log(result)
		  }
		}

		return(
			<div className = "ranking_number">

			
					{result} 
				
			</div>
			)
	}
}

export default Ranking;