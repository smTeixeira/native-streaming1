import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do FontAwesome

const Sucesso = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/checked.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>Assinatura realizada com sucesso!</Text>
      <Text style={styles.subText}>Estamos felizes em ter você conosco =)</Text>
      <Text style={styles.subText}>
        Configure seu perfil e assista seus programas favoritos!!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Configurar perfil')}
      >
        <Text style={styles.buttonText}>Configure o perfil</Text>
        <Icon name="arrow-right" size={26} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 348,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
});

export default Sucesso;