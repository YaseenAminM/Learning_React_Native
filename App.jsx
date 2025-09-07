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
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';
import GridScrollView from './src/components/GridScrollView';
import ClassComponent from './src/components/ClassComponent';
import SecondClassComponent from './src/components/SecondClassComponent';

export default function App() {
  return <View style={styles.appContainer}>{<ClassComponent />}</View>;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#red',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
