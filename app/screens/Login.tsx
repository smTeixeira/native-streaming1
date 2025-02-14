import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Login from '@/components/Login';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/Background.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Login /> 
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
  logoContainer: {
    position: 'relative',
    top: 56,
    left: '50%',
    transform: [{ translateX: -48 }], 
    zIndex: 40,
  },
  logo: {
    // width: 96,
    // height: 96, 
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

export default LoginPage;