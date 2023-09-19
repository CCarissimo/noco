import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// My additions
import SwipeCards from './SwipeCards.js'


export default function App() {
  return (
    <SwipeCards style={{flex: 1}} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
