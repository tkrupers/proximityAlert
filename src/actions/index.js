'use strict';

export const createAlert = (alert) => ({type: 'CREATE_ALERT', alert});

export const selectTab = (tab) => ({type: 'SELECT_TAB', selectedTab: tab});

export const onChangeInput = (text) => ({type: 'ON_CHANGE_INPUT', text});
