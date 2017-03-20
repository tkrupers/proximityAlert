import React, {Component} from 'react';
import {TabBarIOS, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapComponent from '../Map/';
import style from './style';
import {createAlarm, selectTab} from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TabBar extends Component {
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          title="Map"
          iconName="add-location"
          selectedIconName="add-location"
          selected={this.props.selectedTab === 'map'}
          onPress={() => {
          this
            .props
            .selectTab('map');
        }}>
          <MapComponent/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Alarms"
          iconName="alarm-add"
          selectedIconName="alarm-add"
          selected={this.props.selectedTab === 'alarms'}
          onPress={() => {
          this
            .props
            .selectTab('alarms');
        }}>
          <View>
            <Text>Add Place</Text>
          </View>
        </Icon.TabBarItemIOS>
      </TabBarIOS >
    );
  }
}

const stateToProps = (state) => {
  return {selectedTab: state.alarms.selectedTab}
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectTab,
    createAlarm
  }, dispatch)
}

export default connect(stateToProps, dispatchToProps)(TabBar);
