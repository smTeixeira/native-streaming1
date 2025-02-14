import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Planos from '@/components/Signature/Signature'; 

const Signature = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Sair pressionado')}
        >
          <Text style={styles.buttonText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Planos />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 40,
    backgroundColor: 'black',
  },
  logo: {
  },
  button: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 32,
  },
});

export default Signature;