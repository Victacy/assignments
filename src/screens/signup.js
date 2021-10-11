import React, { useState } from 'react'
import { TextInput, View,Button, StyleSheet,Text } from 'react-native'

export default function ESignup({navigation}) {
    const [userInfo,setUserInfo] = useState({name:'',email:'',age:''})
    
    return (
        <View style={styles.container} >
            <Text>Form</Text>
            <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Full name' onChangeText={e =>setUserInfo({...userInfo,name:e})} underlineColorAndroid={'transparent'} />
            <TextInput style={styles.input} placeholder='Email address' onChangeText={e =>setUserInfo({...userInfo,email:e})} underlineColorAndroid={'transparent'} />
            <TextInput style={styles.input} placeholder='Age' onChangeText={e =>setUserInfo({...userInfo,age:e})} underlineColorAndroid={'transparent'}/>
            <TextInput style={styles.input} placeholder=' Password' secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <Button style={styles.display} onPress={() => alert('Done')} title='Save'/>
            <Button style={styles.display} onPress={() => navigation.navigate('Home')} title='Home'/>
                 <Text style={styles.display}>User Details: </Text>
                 <Text>Name: {userInfo.name}</Text>
                 <Text>Email: {userInfo.email}</Text>
                 <Text>Age: {userInfo.age}</Text>
                 {/* <Text>User : {JSON.stringify(userInfo)}</Text> */}
             </View>
             
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8cabf',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input:{
        alignSelf:'stretch',
        height:35,
        width:300,
        marginBottom:15,
        // color:'#',
        borderBottomColor:'#b268a1',
        borderBottomWidth:2,
        borderRadius:10,
    },
    display:{
        padding:10,
    },
})
// <Image source={requiew("./image.png")} />