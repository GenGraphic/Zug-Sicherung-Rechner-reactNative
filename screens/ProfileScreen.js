import React, {useState} from 'react';
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, Image, Pressable, KeyboardAvoidingView, Platform } from "react-native";



const RechnerScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
            style={styles.body}>

            <View>
                <Text style={styles.title}>Konto erstellen</Text>

                <Image 
                    source={require('../assets/haase_logo.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={'#6c757d'}
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={'#6c757d'}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Kennwort"
                    placeholderTextColor={'#6c757d'}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                <Pressable style={styles.btnSignup}>
                    <Text style= {{color:'#FFF', textAlign: 'center'}}>Konto erstellen</Text>
                </Pressable>
                <Pressable style={styles.btnSignin}>
                    <Text style= {{color:'#FFF', textAlign: 'center'}}>Anmelden</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RechnerScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#2B2D42',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        color: '#EDF2F4',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        fontSize: 26
    },
    logo: {
        marginBottom: 10,

    },
    form: {
        felx: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: 300,
        textAlign: 'center',
        marginBottom: 15,
        backgroundColor: '#EDF2F4',
    },
    btnSignup: {
        backgroundColor: '#FFB454',
        width: 230,
        height: 30,
        borderRadius: 5,
        padding: 5,
        marginBottom: 20
    },
    btnSignin: {
        width: 230,
        height: 30,
        borderRadius: 5,
        padding: 5,
        marginBottom: 20
    },

})