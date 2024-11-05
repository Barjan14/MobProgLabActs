import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

// Import the local image
const logo = require('../../assets/Images/logo2.png');

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (username && email && phone && password) {
      Alert.alert('Sign up successful!');
      navigation.navigate('Login'); // Navigate back to Login after sign-up
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={logo} // Using the local logo image
        style={styles.logo}
      />

      {/* Title and Subtitle */}
      <Title style={styles.title}>Create an account</Title>
      <Text style={styles.subtitle}>Connect with your friends today!</Text>

      {/* Username Input */}
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Username"
        autoCapitalize="none"
      />

      {/* Email Input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Phone Number Input */}
      <TextInput
        label="Phone Number"
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Phone Number"
        keyboardType="phone-pad"
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Password"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />

      {/* Sign Up Button */}
      <Button mode="contained" onPress={handleSignUp} style={styles.signUpButton}labelStyle={{ color: '#ffffff' }}>
      Sign Up
     </Button>


      {/* Already have an account? Login */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff', // White background
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark text color for readability
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666', // Light gray color for subtitle
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f7f7f7', // Light gray background for input fields
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#000000', // Black background for the button
    color: '#ffffff', // White text color
    marginTop: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#666666', // Light gray color for "Already have an account?"
  },
  loginLink: {
    color: '#0b3c5d', // Dark blue for "Login" link
    fontWeight: 'bold',
  },
});

export default SignUp;
