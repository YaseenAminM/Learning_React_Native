import { Text, View, Button } from 'react-native';
import React, { Component } from 'react';

export default class SecondClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Yaseen',
    };
  }

  updateName = () => {
    this.setState({ myName: this.state.myName === 'Yaseen' ? 'Amin' : 'Yaseen' }); // ✅ updates state
  };

  render() {
    return (
      <View>
        <Text>SecondClassComponent</Text>
        <Text>Name : {this.state.myName}</Text>
        <Text>Age : {this.props.age}</Text>
        <Button title="Change Name" onPress={this.updateName} />
      </View>
    );
  }
}
