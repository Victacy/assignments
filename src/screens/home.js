import React from 'react'
import { View, Text, Button, Pressable, StyleSheet } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>WLelcome home</Text>
            <Text>Home is a place where home is</Text>
            <Button title='About' onPress={() => navigation.navigate('About')} />
            

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