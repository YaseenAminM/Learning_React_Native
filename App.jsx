/* eslint-disable no-unused-vars */
// Style File
import Styling from './src/components/Styling';
import { Dimensions } from 'react-native';

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
import UseEffectHook from './src/components/UseEffectHook';
import UseEffectUpdatingPhase from './src/components/UseEffectUpdatingPhase';
import UseEffectUnmountingPhase from './src/components/UseEffectUnmountingPhase';
import HideShowToggle from './src/components/HideShowToggle';
import StyleWithButton from './src/components/StyleWithButton';
import Loader from './src/components/Loader';
import PressableCpmponent from './src/components/PressableCpmponent';
import StatusBarExample from './src/components/StatusBarExample';
import UseRefHook from './src/components/UseRefHook';

export default function App() {
  return <View style={styles.appContainer}>{<UseRefHook />}</View>;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#red',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
