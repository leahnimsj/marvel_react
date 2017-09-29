import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// these three files are for bootstrap
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// these three lines have to happen for redux to be part of an application
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// marvelApp will be something exported from our reducers
import marvelApp from './reducers';

// store is our storage system - so we're creating it - the marvelApp knows how to get things in 
// and out of the storage, we're making it middleware with thunk
let store = createStore(marvelApp, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
