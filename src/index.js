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

let entityName = "Vatican";
let categoryName = "general";
let topicName = "smallest_population";

//for testing ranking RankingBar
let category = "animals";
let topic = "most_dogs";
ReactDOM.render(<Chart category={category} topic={topic} />, document.getElementById('ranking'));


//just for testing TooltipScreen.js
// ReactDOM.render(<TooltipScreen entityName={entityName} />, document.getElementById('tooltip-screen'));

//for testing
// let category = "animals";
// let topic = "most_camels";

// let category = "general";
// let topic = "smallest_population";

// let category = "general";
// let topic = "entity_info";
// let entityName = "Japan"; //-> for entityName component!

// let entityName = "Japan";
//let entityName = "Mount Everest";
// let entityName = "Caspian Sea";


//just for testing TooltipScreen.js
ReactDOM.render(
  <TooltipScreen entityName={entityName} category={category} topic={topic} />,
  document.getElementById('tooltip-screen'));


registerServiceWorker();
