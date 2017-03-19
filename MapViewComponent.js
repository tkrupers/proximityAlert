import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Home extends Component {

  constructor() {
    super();

    this.state = {
    }
  }

  componentDidMount() {
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        this.setState({
          initRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: Math.max(0, position.coords.latitude),
            longitudeDelta: Math.max(0, position.coords.longitude)
          }
        });
      }, (error) => this.setState({error: error.message}), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      },);

    this.watchID = navigator
      .geolocation
      .watchPosition(position => {
        console.log(position);
        this.setState({
          currentRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
          }
        });
      })
  }

  componentWillUnmount() {
    navigator
      .geolocation
      .clearWatch(this.watchID);
  }

  render() {
    return (<MapView
      showsUserLocation={true}
      style={styles.map}
      initialRegion={this.state.initRegion}
      region={this.state.currentRegion}
      loadingEnabled={true}

      />);
  }

}

export default Home;