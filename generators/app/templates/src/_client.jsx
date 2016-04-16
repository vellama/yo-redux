import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

import {promise as promiseMiddleware} from './_middlewares';
import * as reducers from './_reducers';
import {configure as configure_store} from './_store';
import {default as routes} from './config/routes';

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

let initialState = window.__INITIAL_STATE__;

Object.keys(initialState).forEach(k => {
  initialState[k] = Immutable.fromJS(initialState[k]);
});

const store = configure_store(browserHistory, initialState);

const history = syncHistoryWithStore(browserHistory, store);


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('app')
);
