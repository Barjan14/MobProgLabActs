import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <PaperProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ title: 'Log In Now' }} />
            <Stack.Screen name="SignUp" options={{ title: 'Sign Up Now'}} />

          </Stack>
        </SafeAreaProvider>       
    </PaperProvider>
   
  )
}

export default _layout