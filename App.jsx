/* eslint-disable no-unused-vars */
// Style File
import Styling from './src/components/Styling';

// Components
import { View, StyleSheet } from 'react-native';
import AsyncStorageApp from './src/components/AsyncStorage';
import Components from './src/components/Components';
import JSX from './src/components/JSX';
import ButtonComponent from './src/components/ButtonComponent';
import UseState from './src/components/UseState';
import Props from './src/components/Props';
import InputComponent from './src/components/InputComponent';
import FlatListComponent from './src/components/FlatListComponent';
import SelectionListComponent from './src/components/SelectionListComponent';

export default function App() {
  return <View style={styles.appContainer}>{<SelectionListComponent />}</View>;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
