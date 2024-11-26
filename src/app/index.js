import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (

   
    <View style={styles.container}>
     
      <Image
        source={require('../../assets/Images/logo.png')}
        style={styles.logo}
      />
     


      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Login</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/SignUp')}>
        <Text style={styles.buttonSecondaryText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFC', 
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40, 
  },
  button: {
    backgroundColor: '#FFFFFF', 
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15, 
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000000', 
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF', 
    borderWidth: 2,
    borderColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});
