import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import { BotaoVoltar } from '../Conta/botaoVoltar';

interface ProfileItemProps {
  name: string;
  imageSrc: any; // Use `any` ou importe o tipo correto para imagens
  onClick: () => void;
  onCancel: () => void;
}

const Perfil = ({ name, imageSrc, onClick, onCancel }: ProfileItemProps) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onClick} style={styles.profileContainer}>
      <View style={styles.profileContent}>
        <View style={styles.profileInfo}>
          <Image source={imageSrc} style={styles.profileImage} />
          <Text style={styles.profileName}>{name}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: '100%',
  },
  profileContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    color: 'white',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    marginVertical: 8,
  },
});

export default Perfil;