import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones do Expo

interface BackButtonProps {
  onClick: () => void;
}

export function BotaoVoltar({ onClick }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 28,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
});