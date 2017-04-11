import React, {Component} from 'react';
import Icon from 'react-native-vector-icons';
import {TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from './style';
import {onChangeInput} from '../../actions';

class TextInputComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TextInput style={style.textInput} onChangeText={(text) => console.log(text)} />
    );
  }
}

const stateToProps = (state) => {
  return {search: state.alarms.search};
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    onChangeInput
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(TextInputComponent);
