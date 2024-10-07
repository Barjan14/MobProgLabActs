import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.flexContainer, isDarkMode ? styles.darkButton : styles.lightButton]} 
        onPress={toggleDarkMode}
      >
        {/* Change image based on isDarkMode prop */}
        <Image 
          source={
            isDarkMode 
              ? require('../../assets/Images/light.png') // Image for light mode
              : require('../../assets/Images/darkmode.png') // Image for dark mode
          } 
          style={styles.icon} 
        />
        {/* Conditional text based on the current mode */}
        <Text style={[styles.text, isDarkMode ? styles.lightText : styles.darkText]}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4, // Adjusted container width for a smaller button
    height: height * 0.08,
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
  },
  lightText: {
    color: '#FFF', // Light mode text color
  },
  darkText: {
    color: '#000', // Dark mode text color (changed to white for better contrast)
  },
  darkButton: {
    backgroundColor: '#333', // Dark button background for dark mode
  },
  lightButton: {
    backgroundColor: '#FFF', // Light button background for light mode
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default DarkMode;

