import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './layouts/Header';
import Index from './pages/Index';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Index/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
