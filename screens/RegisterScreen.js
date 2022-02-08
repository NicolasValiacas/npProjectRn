import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Input, Text, Button } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () =>{

    };

  return (
    <View behavior='padding' style={styles.container}>
        
        <StatusBar style='light' />
        
        <Text h3 style={styles.create}>
        Create a SwartzChat account
        </Text>

        <View style={styles.inputContainer}>
            
            <Input 
            placeholder='Full Name' 
            autoFocus
            type='text' 
            value={name}
            onChangeText={(text) => setName(text)} 
            />

            <Input 
            placeholder='Email' 
            type='email' 
            value={email}
            onChangeText={(text) => setEmail(text)} 
            />

            <Input 
            placeholder='Password' 
            type='password' 
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)} 
            />

            <Input 
            placeholder='Profile Picture (Optional)' 
            type='text' 
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)} 
            onSubmitEditing={register}
            />
            
            <Button
            containerStyle={styles.reg}
            onPress={register} 
            title='Register'
            />

        </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    create: {
        marginBottom: 50,
        height: 100, 
    },
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: 300,
        marginTop: 10,
    },
    reg: {
    
    },

});
