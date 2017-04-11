import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';

import Main from './scenes/';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer, devToolsEnhancer());

const wrapper = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default wrapper;
