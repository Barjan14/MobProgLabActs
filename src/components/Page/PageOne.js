import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
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
          ? require('../../assets/Images/darkbackground.jpg')
          : require('../../assets/Images/lightbg.jpg')
      }
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Avatar />
        <NameText style={isDarkMode ? styles.darkText : styles.lightText} />
        <Blank />
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
    resizeMode: 'cover',
  },
  container: {
    padding: 15,
    flex: 1,
  },
  lightText: {
    color: '#222222',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

export default PageOne;
