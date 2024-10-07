import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import DarkMode from './src/components/Panels/DarkModePanel';
import UserPage from './src/components/Page/UserPage';
import { View } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View style={styles.smallButtonContainer}>
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </View>
        <UserPage isDarkMode={isDarkMode} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    marginBottom: -20,
  },
 
  smallButtonContainer: {
    // Container for the small button
    width: 120,  // Width of the small button container
    height: 50,  // Height of the small button container
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5, // Spacing between button and the next component
  },


};
