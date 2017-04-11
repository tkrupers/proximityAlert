import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapComponent from '../../components/Map';
import TextInputComponent from '../../components/TextInput';

export default function () {
  return (
    <View style={styles.container}>
      <MapComponent style={styles.mapView}/>
      <View style={styles.inputView}>
        <TextInputComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapView: {
    flex: 1
  },
  inputView: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 15
  }
});
