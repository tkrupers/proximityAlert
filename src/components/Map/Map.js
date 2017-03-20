import React, {Component} from 'react';
import MapView from 'react-native-maps';

import styles from './style';

class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    navigator
      .geolocation
      .getCurrentPosition((position) => {
        this.setState({
          initRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.043,
            longitudeDelta: 0.043
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
        this.setState({
          currentRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.043,
            longitudeDelta: 0.043
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
      loadingEnabled={true}/>);
  }

}

export default Home;