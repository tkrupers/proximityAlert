'use strict';

import {combineReducers} from 'redux';

const initialState = {
  alarms: [],
  isCreating: false,
  search: {},
  selectedTab: 'map',
  errors: ''
}

const alarms = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB':
      return {
        ...state,
        selectedTab: action.selectedTab
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({alarms});

export default rootReducer;
