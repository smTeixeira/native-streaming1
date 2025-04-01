import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BotaoVoltar } from './botaoVoltar';
import Buttons from '../Buttons/buttons';
import { ConfirmCode as ConfirmCodeEmail } from '../Email/confirmCodeEmail';
import { ConfirmCode as ConfirmCodeCel } from '../Celular/confirmCodeCel';

interface ForgotPasswordProps {
  onCancel: () => void;
}

export const ForgotPassword = ({ onCancel }: ForgotPasswordProps) => {
  const [resetOption, setResetOption] = useState('email');
  const [showEmailCode, setShowEmailCode] = useState(false);
  const [showCellCode, setShowCellCode] = useState(false);

  if (showEmailCode) {
    return <ConfirmCodeEmail onCancel={onCancel} />;
  }

  if (showCellCode) {
    return <ConfirmCodeCel onCancel={onCancel} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BotaoVoltar onClick={onCancel} />
      <Text style={styles.title}>Segurança</Text>
      <Text style={styles.subtitle}>Esqueci minha senha</Text>
      <Text style={styles.description}>De que forma você quer redefinir sua senha?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, resetOption === 'email' && styles.radioButtonSelected]}
          onPress={() => setResetOption('email')}
        >
          <Text style={styles.radioLabel}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, resetOption === 'text' && styles.radioButtonSelected]}
          onPress={() => setResetOption('text')}
        >
          <Text style={styles.radioLabel}>Mensagem de texto</Text>
        </TouchableOpacity>
      </View>
      {resetOption === 'email' ? (
        <View>
          <Text style={styles.description}>
            Enviaremos para o e-mail teste@gmail.com as instruções de como redefinir sua senha.
          </Text>
          <Buttons onCancel={onCancel} onNext={() => setShowEmailCode(true)}>
            Continuar por email
          </Buttons>
        </View>
      ) : (
        <View>
          <Text style={styles.description}>
            Enviaremos uma mensagem de texto para o número (11) 91234-5678 as instruções de como
            redefinir sua senha.
          </Text>
          <Buttons onCancel={onCancel} onNext={() => setShowCellCode(true)}>
            Continuar por mensagem
          </Buttons>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1C1B1B',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#333',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
});

export default ForgotPassword;