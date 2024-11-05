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
        {}
        <Image 
          source={
            isDarkMode 
              ? require('../../assets/Images/light.png') 
              : require('../../assets/Images/darkmode.png') 
          } 
          style={styles.icon} 
        />
        {}
        <Text style={[styles.text, isDarkMode ? styles.lightText : styles.darkText]}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4, 
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
    color: '#FFF', 
  },
  darkText: {
    color: '#000', 
  },
  darkButton: {
    backgroundColor: '#333',
  },
  lightButton: {
    backgroundColor: '#FFF', 
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default DarkMode;

