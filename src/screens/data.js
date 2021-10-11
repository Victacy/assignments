import React,{ useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
// import { RadioButton } from 'react-native-paper'
import logo from '../images/logo.png'

export default function Data({navigation}) {

    const [user,setUser] = useState({name:'',age:'',email:''})
    // const [radio,setRadio] =useState('');

    return (
        <View >
            <View>
            <Image source={logo} style={{ width: 220, height: 120 }} /> 
            </View>
             <View >
             <Text style={styles.head}> Kindly Fill this form </Text>
             <TextInput style={styles.input} placeholder=' e.g:Kofi Sam'  value={user.name} onChangeText={e => setUser({name:e.target.value})} underlineColorAndroid={'transparent'} />
             <TextInput style={styles.input} placeholder=' e.g:name@example.com' value={user.email} onChangeText={e => setUser({email:e.target.value})} underlineColorAndroid={'transparent'} />
             <TextInput style={styles.input} placeholder=' e.g:19 years' value={user.age} onChangeText={e => setUser({age:e.target.value})} underlineColorAndroid={'transparent'} />
             <TextInput style={styles.input} placeholder=' Password' underlineColorAndroid={'transparent'} secureTextEntry={true}/>
             {/* <Text>Gender</Text>
             <RadioButton.Group onValueChange={newRadio => setRadio(newVRadio)} value={radio}>
                 <View>
                     <Text>Male</Text>
                     <RadioButton value='Male'/>
                     <Text>Female</Text>
                     <RadioButton value='Female' />
                 </View>
             </RadioButton.Group> */}
             <View>
                 {/* <Button title='submit' onPress={() =>alert('Saved')} /> */}
                 {/* <Button title="Go back" onPress={() => navigation.navigate('Home')} /> */}
                 <Text>Your details:</Text>
                 <Text>Name : {user.name}</Text>
                 <Text>Email address : {user.email} </Text>
                 <Text>Age: {user.age}</Text>
                 <Text>User : {JSON.stringify(user)}</Text>
             </View>
             </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight:'bold',
        fontSize:20,
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
})
