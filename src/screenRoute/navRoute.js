import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Elements from '../screens/elements'
import Home from '../screens/home';
import About from '../screens/about'
import Signup from '../screens/signup'

const Stack = createNativeStackNavigator();

export default function NavRoute() {
    return (
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Elements" component={Elements} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
