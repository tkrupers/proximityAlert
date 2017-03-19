/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, NavigatorIOS, TabBarIOS, View, Text} from 'react-native';

import MapViewComponent from './MapViewComponent';

export default class proximityAlert extends Component {
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item systemIcon="favorites" selected={true}>
         <MapViewComponent />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon="more">
          <View>
            <Text>Add Place</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('proximityAlert', () => proximityAlert);
