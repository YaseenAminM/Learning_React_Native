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
import ModalDialogBox from './src/components/ModalDialogBox';
import AlertExample from './src/components/AlertExample';
import GET_API from './src/components/GET_API';
import Post_API from './src/components/Post_API';
import PUT_API from './src/components/PUT_API';
import PATCH_API from './src/components/PATCH_API';
import DELETE_API from './src/components/DELETE_API';
import GET_API_LIST from './src/components/GET_API_LIST';
import PlatformExample from './src/components/PlatformExample';
import Search from './src/components/Search';

export default function App() {
  return <View style={styles.appContainer}>{<Search />}</View>;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#red',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
