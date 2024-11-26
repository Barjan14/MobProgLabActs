import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useRouter } from 'expo-router';

const logo = require('../../assets/Images/logo2.png');

const SignUp = ({ navigation }) => {
  
  const router = useRouter ();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (username && email && phone && password) {
      Alert.alert('Sign up successful!');
      ('Login'); 
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      {}
      <Image
        source={logo}
        style={styles.logo}
      />

    
      <Title style={styles.title}>Create an account</Title>
      <Text style={styles.subtitle}>Connect with your friends today!</Text>

     
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Username"
        autoCapitalize="none"
        placeholderTextColor="#000" 
        textColor="#000"            
      />

      
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#000" 
        textColor="#000"            
      />

     
      <TextInput
        label="Phone Number"
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Phone Number"
        keyboardType="phone-pad"
        placeholderTextColor="#000" 
        textColor="#000"            
      />

      
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        mode="outlined"
        placeholder="Enter Your Password"
        secureTextEntry
        placeholderTextColor="#000" 
        textColor="#000"            
        right={<TextInput.Icon name="eye" />}
      />

      
      <Button mode="contained" onPress={handleSignUp} style={styles.signUpButton}labelStyle={{ color: '#ffffff' }}>
      Sign Up
     </Button>


      
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/Login')}>
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
    backgroundColor: '#ffffff', 
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
    color: '#333333', 
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666', 
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f7f7f7', 
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#000000', 
    color: '#ffffff', 
    marginTop: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#666666', 
  },
  loginLink: {
    color: '#0b3c5d', 
    fontWeight: 'bold',
  },
});


export default SignUp;
