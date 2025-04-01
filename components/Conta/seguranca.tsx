import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { AltEmail } from '../Email/altEmail';
import { AltCelular } from '../Celular/altCelular';
import { AltSenha } from './altSenha';

export function Seguranca() {
  const [viewAltSenha, setViewAltSenha] = useState(false);
  const [viewAltEmail, setViewAltEmail] = useState(false);
  const [viewAltCelular, setViewAltCelular] = useState(false);

  if (viewAltSenha) {
    return <AltSenha onCancel={() => setViewAltSenha(false)} />;
  }

  if (viewAltEmail) {
    return <AltEmail onCancel={() => setViewAltEmail(false)} />;
  }

  if (viewAltCelular) {
    return <AltCelular onCancel={() => setViewAltCelular(false)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segurança</Text>

      <View style={styles.menuContainer}>
        <Text style={styles.subtitle}>Detalhes da conta</Text>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setViewAltSenha(true)} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <MaterialIcons name="lock" size={24} color="white" />
              <Text style={styles.menuItemText}>Alterar senha</Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => setViewAltEmail(true)} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <MaterialCommunityIcons name="email" size={24} color="white" />
              <View>
                <Text style={styles.menuItemText}>Alterar email</Text>
                <Text style={styles.menuItemSubText}>teste@teste.com</Text>
              </View>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => setViewAltCelular(true)} style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Feather name="smartphone" size={24} color="white" />
              <View>
                <Text style={styles.menuItemText}>Alterar celular</Text>
                <Text style={styles.menuItemSubText}>(11) 99999-9999</Text>
              </View>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  menu: {
    backgroundColor: '#272727',
    borderRadius: 8,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    color: 'white',
    marginLeft: 8,
  },
  menuItemSubText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 8,
  },
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
});