import { View, Text } from 'react-native';
import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export default function ReduxToolKit() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
