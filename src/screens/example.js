import React,{ useState } from 'react'

import { Text, View,Button, TextInput } from 'react-native'

// props is a json object
const Cat =(props) =>{
    // const [myAge,setMyAge] =useState(true);
    const [myAge,setMyAge] =useState(16);
    const [name,setName] = useState(null);
    return(
        <View>
            {/* <Text>My name is {props.name} and I am {props.age} years old.</Text> */}
            <Text>My name is {props.name} and I'm {myAge} years old.I am 
            {myAge >= 18?"an Adult": "yet to be an Adult"} .</Text>
            <Button onPress={() => setMyAge(myAge + 1)} title="Increase Age"/>
            <Text>Username :</Text>
            <TextInput placeholder="Enter username" onChangeText={setName} />
            <Button onPress={() => alert(name)} title="Save" />
        </View>
    )
}

export default function Example() {
    return (
        <View>
            <Cat name='kofi'/>
            {/* <Cat name='kofi' age='12'/>
            <Cat name='Abel' age='34'/>
            <Cat name='Sara' age='82'/> */}
        </View>
    )
}
