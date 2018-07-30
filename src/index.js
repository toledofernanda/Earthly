import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { HashRouter } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

/* using <HashRouter> instead of <BrowserRouter> because <BrowserRouter> should be used when you 
have a server that will handle dynamic requests (knows how to respond to any possible URI),
while the <HashRouter> should be used for static websites
*/
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

registerServiceWorker();
