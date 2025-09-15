import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/slice/counterSlice';

export default function Counter() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Counter : {counter}</Text>
      <Button title="+ increment" onPress={() => dispatch(increment())} />
      <Button title="- decrement" onPress={() => dispatch(decrement())} />
      <Button title="reset" onPress={() => dispatch(reset())} />
    </View>
  );
}
