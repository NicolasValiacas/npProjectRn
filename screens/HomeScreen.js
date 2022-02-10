import { StatusBar } from 'expo-status-bar'
import { SimpleLineIcons } from '@expo/vector-icons'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import {
  getAuth,
  signOut,
  collection,
  getFirestore,
  onSnapshot,
} from '../firebase'

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([])
  const auth = getAuth()
  const db = getFirestore()
  
  const signOutUser = () => {
    signOut(auth).then(() => navigation.replace('Login'))
  }

  useEffect(
    () =>
      onSnapshot(collection(db, 'chats'), (snapshot) => {
        setChats(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      }),
    []
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'SwartzChat',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.imageUrl }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            width: 90,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#f4511e'
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="camera" size={18} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('AddChat')}
          >
            <SimpleLineIcons name="pencil" size={18} color="black" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <SimpleLineIcons name="logout" size={18} color="black" />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName,
    })
  }

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView style={styles.container}>
        {chats.map(({ id, chatName }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})