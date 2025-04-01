import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { ForgotPassword } from '../Conta/esqueciSenha';
import Perfis from './perfis';

const Autenticacao = () => {
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const predefinedPassword = '123456';

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (password === predefinedPassword) {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Senha incorreta', 'Tente novamente.');
    }
  };

  if (isAuthenticated) {
    return <Perfis onCancel={() => setIsAuthenticated(false)} />;
  }

  if (showForgotPassword) {
    return <ForgotPassword onCancel={() => setShowForgotPassword(false)} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Gerenciar perfis</Text>
        <Text style={styles.subtitle}>
          Digite a sua senha para editar a classificação etária dos perfis cadastrados na sua conta:
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="********"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    width: '100%',
    maxWidth: 536,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    padding: 0,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Autenticacao;