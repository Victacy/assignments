import React, { useState } from 'react'
import { TextInput, View,Button } from 'react-native'

export default function Elements({navigation}) {
    const [userInfo,setUserInfo] = useState({name:'',email:'',age:''})
    
    return (
        <View>
            <Text>Form</Text>
            <TextInput value={userInfo.name} placeholder='Full name' onChangeText={e =>setUserInfo({name:e.target.value})}/>
            <TextInput value={userInfo.email} placeholder='Email address' onChangeText={e =>setUserInfo({email:e.target.value})}/>
            <TextInput value={userInfo.age} placeholder='Age' onChangeText={e =>setUserInfo({age:e.target.value})}/>
            <TextInput placeholder=' Password' secureTextEntry={true}/>
            <View>
            <Button onPress={() => alert(showAlert)} title='Save'/>
            </View>
             <View>
                 <Text>User Details: </Text>
                 <Text>Name: {userInfo.name}</Text>
                 <Text>Email: {userInfo.email}</Text>
                 <Text>Age: {userInfo.age}</Text>
             </View>
             
        </View>
    )
}


// <Image source={requiew("./image.png")} />