import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';

import MapScene from './Map';
import AlarmListScene from './AlarmList';

const main = TabNavigator({
  Map: { screen: MapScene },
  Alarms: { screen: AlarmListScene }
});

export default main;