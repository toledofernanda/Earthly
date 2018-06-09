import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
// import Map from 'components/Map';
// import EntityName from 'components/EntityName';
// import EntityInfo from 'components/EntityInfo';
import TooltipScreen from 'components/TooltipScreen';
import Chart from 'components/Chart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//just for testing Map.js
// ReactDOM.render(<Map />, document.getElementById('map'));

// ReactDOM.render(<EntityName />, document.getElementById('EntityName'));

// ReactDOM.render(<EntityInfo />, document.getElementById('EntityInfo'));

let entityName = "Japan";
// let entityName = "Mount Everest";
// let entityName = "Empire State";

//for testing ranking RankingBar
let category = "animals";
let topic = "most_dogs";
ReactDOM.render(<Chart category={category} topic={topic} />, document.getElementById('ranking'));


//just for testing TooltipScreen.js
// ReactDOM.render(<TooltipScreen entityName={entityName} />, document.getElementById('tooltip-screen'));



registerServiceWorker();
