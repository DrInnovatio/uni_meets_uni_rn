import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './components/signUp'

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ { fontSize: "30px" } }>Uni Meets Uni</Text>
      <StatusBar style="auto" />
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
