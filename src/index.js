import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import Flag from 'components/Flag';
import registerServiceWorker from './registerServiceWorker';

let country = "Japan"

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Flag country = {country}/>, document.getElementById('flag'));
registerServiceWorker();
