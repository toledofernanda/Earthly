import React, { Component } from 'react';
//import images for testing pourpose
import jp from 'images/flags/jp.png';
import mountain from 'images/mountain.jpeg';



class Flag extends Component{
	render(){

		  const isCountry = true;
		  if (!isCountry) {
		    return <img src={jp} alt="jp" />;
		  }
		  return <img src={mountain} alt="mountain" />;
		

	}

}

export default Flag;
