import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';

// import Map from 'components/Map';
// import EntityName from 'components/EntityName';
// import EntityInfo from 'components/EntityInfo';
import TooltipScreen from 'components/TooltipScreen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//just for testing Map.js
// ReactDOM.render(<Map />, document.getElementById('map'));

// ReactDOM.render(<EntityName />, document.getElementById('EntityName'));

// ReactDOM.render(<EntityInfo />, document.getElementById('EntityInfo'));

let entityName = "Japan";
let categoryName = "general";
let topicName = "entity_info";
// let entityName = "Mount Everest";
// let entityName = "Empire State";


//just for testing TooltipScreen.js
ReactDOM.render(<TooltipScreen entityName={entityName} categoryName = {categoryName} topicName = {topicName}/>, document.getElementById('test'));


registerServiceWorker();
