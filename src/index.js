import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </BrowserRouter>, 
            document.getElementById('root')
    );

serviceWorker.unregister();
