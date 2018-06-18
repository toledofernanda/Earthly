import React, { Component } from 'react';
import { db } from './Db';

class Ranking extends Component{
	render(){
		let entityName = this.props.entityName;
		let category = this.props.category;
    let topic = this.props.topic;
		let subCat = db[category][topic];
		let result;

		for (let item of subCat){
			//show quantity for ranking
			if((item['entity_name'] === entityName) && item.hasOwnProperty('ranking')){
				result = numberWithCommas(item['quantity']);
			}
		}

		function numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

		return(
			<div className = "ranking_quantity">
				<p>
					{result}
				</p>
			</div>
		)
	}
}

export default Ranking;
