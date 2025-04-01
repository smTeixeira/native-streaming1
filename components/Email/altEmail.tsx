import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import { BotaoVoltar } from '../Conta/botaoVoltar';
import Buttons from '../Buttons/buttons';
import { ConfirmCode } from '../Email/confirmCodeEmail';

interface AltEmailProps {
  onCancel: () => void;
}

export const AltEmail = ({ onCancel }: AltEmailProps) => {
  const [altCelular, setAltCelular] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setAltCelular(true);
      setError('');
    } else {
      setError('Por favor, insira um email válido.');
    }
  };

  const handleNext = () => {
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      {!altCelular ? (
        <>
          <BotaoVoltar onClick={onCancel} />
          <Text style={styles.title}>Altere o email</Text>
          <Text style={styles.description}>
            A HANDSPlay usa seu email para enviar mensagens, como as que auxiliam no acesso e recuperação da conta, e
            mensagens de novos filmes e séries. A seguir, insira seu novo email, e aguarde o código de verificação.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, error ? styles.inputError : null]}
              value={email}
              onChangeText={setEmail}
              placeholder="teste@gmail.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="cancel" size={16} color="red" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Buttons onCancel={onCancel} onNext={handleNext}>
              Próximo
            </Buttons>
          </View>
        </>
      ) : (
        <ConfirmCode onCancel={() => setAltCelular(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1B1B',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
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
  inputError: {
    borderColor: 'red',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 8,
  },
  buttonContainer: {
    paddingHorizontal: 8,
  },
});

export default AltEmail;