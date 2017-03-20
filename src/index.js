import React, {Component} from 'react';
import {AppRegistry, NavigatorIOS, TabBarIOS, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapComponent from './components/Map/';

export default class proximityAlert extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'map'
    }
  }
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title="Map"
          iconName="add-location"
          selectedIconName="add-location"
          selected={this.state.selectedTab === 'map'}
          onPress={() => {
          this.setState({selectedTab: 'map'});
        }}>
          <MapComponent/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Alarms"
          iconName="alarm-add"
          selectedIconName="alarm-add"
          selected={this.state.selectedTab === 'alarms'}
          onPress={() => {
          this.setState({selectedTab: 'alarms'});
        }}>
          <View>
            <Text>Add Place</Text>
          </View>
        </Icon.TabBarItemIOS>
      </TabBarIOS >
    );
  }
}

AppRegistry.registerComponent('proximityAlert', () => proximityAlert);
