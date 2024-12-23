import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Login = ({ navigation }) => {
  
  const router = useRouter ();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
   

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Login successful!');
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/logo.png')}
        style={styles.logo}
      />
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        mode="outlined"
        placeholder="example@gmail.com"
        autoCapitalize="none"
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
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton} labelStyle={{ color: '#ffffff' }}>
        Login
      </Button>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push ('/SignUp')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
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
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#000000',
    marginTop: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#666666',
  },
  signUpLink: {
    color: '#0b3c5d',
    fontWeight: 'bold',
  },
});
export default Login;
