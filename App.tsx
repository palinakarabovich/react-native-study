import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#EDE7D9'
  },
});
