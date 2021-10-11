import React,{ useState }  from 'react'
import { Button, ScrollView, Alert, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import { RadioButton } from 'react-native-paper';

export default function Form() {

    // function showToast(){
    //     // ToastAndroid.show('Form submitted successfully',ToastAndroid.SHORT)
    //     ToastAndroid.show('Form submitted successfully',ToastAndroid.SHORT)
    // }

    const [email,setEmail] = useState("");
    const [fullname,setFname] = useState("");
    // const [lname,setLname] = useState("");
    const [password,setPassword] = useState("");
    const [age,setAge] = useState("");
    const [value, setValue] = useState();

    // const handleSubmit= (e) =>{
    //     e.preventDefault()
    //     if(email,lname,fname,age,password){
    //         aler
    //     }
    // }
    const showAlert = () =>{
        Alert.alert(
           fullname, email, age
        )
     }
    return (
        <View>

            <Text style={styles.header}> Kindly fill this form</Text>
            <Text></Text>
            <TextInput style={styles.input} placeholder='fullname' value={fullname} onChangeText={setFname}/>
            {/* <TextInput style={styles.input} placeholder='last name' value={lname} onChange={setLname}/> */}
            <TextInput style={styles.input} placeholder='age' value={age} onChangeText={setAge} keyboardType="numeric"/>
            <TextInput style={styles.input} placeholder='email' textContentType={'emailAddress'} value={email} onChangeText={setEmail}/>
            <TextInput style={styles.input} textContentType={'password'} placeholder='password' value={password} secureTextEntry={true} onChangeText={setPassword}/>
            <Text>Gender</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View>
            <Text>Male</Text>
            <RadioButton value="Male" />
            <Text>Female</Text>
            <RadioButton value="Female" />
            </View>
    </RadioButton.Group>
            <View style={styles.btn}>
                {/* <Button title="submit" onPress={showToast} /> */}
                <Button title="submit"style={styles.display} onPress={() => alert(showAlert)} />
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    header:{
        fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    },
    display: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
     },
    btn:{
        // backgroundColor:'#6636f1',
        borderRadius:14,
        width:350,
        height:55,
        margin:10,
        padding:6,
        color:"#841584",
    },
    input:{
        width:350,
        height:55,
        // backgroundColor:'#42a5f5',
        margin:12,
        padding:10,
        borderColor:"#42a5f5",
        color:'black',
        // borderRadius:14,
        borderWidth:1,
    },
})