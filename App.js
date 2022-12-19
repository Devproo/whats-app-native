import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import ChatListItem from './src/components/ChatListItem'
import ChatsScreen from './src/screens/ChatsScreen'
import ChatScreen from './src/screens/ChatScreen'

const chat = {
  id: '1',
  user: {
    image:
      'https://apicms.thestar.com.my/uploads/images/2022/10/11/1772200.jpg',
    name: 'Adam',
  },
  lastMessage: {
    text: 'Go',
    createdAt: '07: 30',
  },
}

export default function App() {
  return (
    <Pressable style={styles.container}>
      <StatusBar style='auto' />
     
      <ChatScreen />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50,
  },
})
