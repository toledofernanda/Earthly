import React, {Component} from 'react';

class Prac extends Component{
	render(){
		let country = ['japan', 'canada','usa'];
		let result = [];

		for(let item of country){
			result.push(
				<div>
					<h2>{item}</h2>

				</div>

				);
		}

		return(
			<div>

				<h1>{result}</h1>
			</div>

			);


	}

}

export default Prac;