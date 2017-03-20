/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import AppComponent from './src/';

export default class proximityAlert extends Component {
  render() {
    return (
      <AppComponent />
    );
  }
}

AppRegistry.registerComponent('proximityAlert', () => proximityAlert);
