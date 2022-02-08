import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const LoginScreen = () => {
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

        <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
        <Button containerStyle={styles.button} type='outline' title='Register'/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {},
    inputContainer: {},
    button: {}
});
