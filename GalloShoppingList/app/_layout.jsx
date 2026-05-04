import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <>
     <Stack>
      <Stack.Screen 
      name="index" options={{ headerShown: false }} />
      <StackScreen
      name="home" options={{ headerShown: false }} />   
     </Stack>
     <StatusBar style='light' />
     </>
  )
}