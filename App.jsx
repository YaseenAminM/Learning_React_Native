import { View, StyleSheet } from 'react-native';
import AsyncStorageApp from './src/components/AsyncStorage';
import Components from './src/components/Components';
import JSX from './src/components/JSX';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <JSX></JSX>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
