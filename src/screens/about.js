import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <Text>About page</Text>
            {/* <Button title='Elements' onPress={() => navigation.navigate('Elements')} />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            <Text>About us: We are a well known company which deals in design and web development</Text>
            <Button title='Signup' onPress={() => navigation.navigate('Signup')} />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8cabf',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
