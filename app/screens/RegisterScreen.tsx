import Register from '@/components/Register/Register';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RegisterPage = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/Background.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.nav}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Register />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.8,
  },
  nav: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 40,
    zIndex: 40,
  },
  logo: {
    // height: 40,
    // width: 100, // Ajuste conforme necessário
  },
  button: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterPage;