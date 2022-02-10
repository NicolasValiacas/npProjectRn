import { StyleSheet, View } from 'react-native';
import React, { useState, useLayoutEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    useLayoutEffect(() => {
        navigation.setOptions({
          headerBackTitle: 'Back To Login',
        })
      }, [navigation])

      const register = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
          .then((authUser) => {
            const user = authUser.user
            updateProfile(user, {
              displayName: fullname,
              photoURL: imageUrl,
            })
              .then(() => console.log('Profile Updated!'))
              .catch((error) => console.log(error.message))
          })
          .catch((error) => alert(error.message))
      }

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
            value={fullname}
            onChangeText={(text) => setFullname(text)} 
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
            placeholder='Profile Picture URL (Optional)' 
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
        marginBottom: 20,
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
    reg:{
      backgroundColor: '#f4511e',
    },

});