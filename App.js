import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import NavRoute from './src/screenRoute/navRoute';
import { NavigationContainer } from '@react-navigation/native';
// import Data from './src/screens/data'

export default function App() {
  
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <Data /> */}
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <NavigationContainer>
    <NavRoute />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8cabf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
