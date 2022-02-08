import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const signIn = () => {

    }

    return (
    <View style={styles.container}>

        <StatusBar style='light' />
        
        <Image 
        source={require('../Images/Connect.png')} 
        style={{ width: 200, height: 200 }}
        />

        <View style={styles.inputContainer}>
            
            <Input 
            placeholder='Email' 
            type='email' 
            value={email}
            onChangeText={(text) => setEmail(text)} 
            />

            <Input 
            placeholder='Password' 
            secureTextEntry 
            type='password' 
            value={password}
            onChangeText={(text) => setPassword(text)} 
            />
            
        </View>

        <Button 
        containerStyle={styles.reg} 
        onPress={signIn} 
        title='Login'
        />

        <Button 
        onPress={() => navigation.navigate('Register')} 
        containerStyle={styles.button} 
        type='outline' 
        title='Register'
        />

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: 100,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10, 
    },
    reg: {
        width: 200,
        marginBottom: 10,
        backgroundColor: '#f4511e',
    }
});
