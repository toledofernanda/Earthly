import React, { Component } from 'react';
import { db } from './Db';

class Ranking extends Component{
	render(){

		/* CSS */
		let rankingNum = {
			fontSize: '.7em',
			paddingTop: '.5em'
		}

		/* JS */
		let entityName = this.props.entityName;
		let category = this.props.category;
    let topic = this.props.topic;
		let subCat = db[category][topic];
		let result;

		for (let item of subCat){
			//show quantity for ranking
			if(item['topic_description'] === 'Happiest Country') {
				result = "_";
			} else if((item['entity_name'] === entityName) && item.hasOwnProperty('ranking')){
				result = item['quantity'];
			}
		}

		return(
			<div className = "ranking_quantity" id={topic} style={rankingNum}>
					{result}
			</div>
		)
	}
}

export default Ranking;
