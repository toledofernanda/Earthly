import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { BrowserRouter } from "react-router-dom";

// import Map from 'components/Map';
// import EntityName from 'components/EntityName';
// import EntityInfo from 'components/EntityInfo';
// import TooltipScreen from 'components/TooltipScreen';
// import Chart from 'components/Chart';
// import RankingEntity from 'components/RankingEntity';
// import Result from 'components/Result';
import CategoryFilter from 'components/CategoryFilter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

//just for testing Map.js
// ReactDOM.render(<Map />, document.getElementById('map'));

// ReactDOM.render(<EntityName />, document.getElementById('EntityName'));

// ReactDOM.render(<EntityInfo />, document.getElementById('EntityInfo'));

//just for testing TooltipScreen.js
// ReactDOM.render(<TooltipScreen entityName={entityName} />, document.getElementById('tooltip-screen'));

// ReactDOM.render(<CategoryFilter />, document.getElementById('filter'));


//for testing RANKING ENTITY
// let category = "animals";
// let topic = "most_dogs";
// let category = "general";
// let topic = "entity_info";
// let entityName = "Brazil";

// ReactDOM.render(
//   <RankingEntity category={category} topic={topic} />,
//   document.getElementById('ranking-entity'));

//for testing ranking RankingBar
// let category = "animals";
// let topic = "most_dogs";
// ReactDOM.render(<Chart category={category} topic={topic} />, document.getElementById('ranking'));

//TEST RESULT
// ReactDOM.render(<Result category={category} topic={topic} />, document.getElementById('result'));


// let category = "general";
// let topic = "smallest_population";

// let category = "general";
// let topic = "entity_info";
// let entityName = "Japan"; //-> for entityName component!


// let entityName = "Japan";
// let entityName = "Mount Everest";
// let entityName = "Caspian Sea";


// //just for testing TooltipScreen.js
// ReactDOM.render(
//   <TooltipScreen entityName={entityName} category={category} topic={topic} />,
//   document.getElementById('tooltip-screen'));

registerServiceWorker();
