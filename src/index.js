import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import Flag from 'components/Flag';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Flag />, document.getElementById('root'));
registerServiceWorker();
