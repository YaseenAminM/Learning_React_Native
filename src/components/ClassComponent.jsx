/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SecondClassComponent from './SecondClassComponent';

class ClassComponent extends Component {
  render() {
    const age = 28;
    return (
      <View>
        <SecondClassComponent age={age} />
      </View>
    );
  }
}

export default ClassComponent;
