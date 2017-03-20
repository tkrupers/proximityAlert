'use strict';

export const createAlert = (alert) => ({type: 'CREATE_ALERT', alert});

export const selectTab = (tab) => ({type: 'SELECT_TAB', selectedTab: tab});
