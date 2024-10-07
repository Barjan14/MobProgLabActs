import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import NameText from '../Typography/NameText';
import ManageProfile from '../Panels/ManageProfilePanel';
import ProfileText from '../Typography/ProfileText';
import Notifications from '../Panels/NotificationPanel';
import Blank from '../Typography/blank';
const PageOne = ({ isDarkMode }) => {
  return (
    <ImageBackground
      source={
        isDarkMode
          ? require('../../assets/Images/darkbackground.jpg') // Background image for dark mode
          : require('../../assets/Images/lightbg.jpg') // Background image for light mode
      }
      style={styles.backgroundImage} // Style for ImageBackground
    >
      <View style={styles.container}>
        <Avatar />
        {/* Text components will change color based on isDarkMode */}
        <NameText style={isDarkMode ? styles.darkText : styles.lightText} />
        <Blank/>
        <ProfileText style={isDarkMode ? styles.darkText : styles.lightText} />
        <ManageProfile />
        <Notifications />
      
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust image scaling mode
  },
  container: {
    padding: 15,
    flex: 1,
  },
  lightText: {
    color: '#222222', // Text color for light mode (dark text)
  },
  darkText: {
    color: '#FFFFFF', // Text color for dark mode (light text)
  },
});

export default PageOne;
