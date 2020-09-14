import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ { fontSize: "30px" } }>Uni Meets Uni</Text>
      <Text style={ { fontSize: "30px" } }>Test 2</Text>
      <Text style={ { fontSize: "30px" } }>Test 3</Text>
      <StatusBar style="auto" />
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
