import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import { BotaoVoltar } from '../Conta/botaoVoltar';
import Buttons from '../Buttons/buttons';
import { ForgotPassword } from '../Conta/esqueciSenha';

interface ExcluirProps {
  onCancel: () => void;
}

const Excluir = ({ onCancel }: ExcluirProps) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [errors, setErrors] = useState({
    currentPassword: '',
  });

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.values(validationErrors).every((error) => error === '')) {
      setIsDeleted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {
      currentPassword: '',
    };

    if (!currentPassword) {
      errors.currentPassword = 'Senha incorreta.';
    } else if (currentPassword !== 'senhaCorreta') {
      errors.currentPassword = 'Senha incorreta.';
    }

    return errors;
  };

  const handleNext = () => {
    handleSubmit();
  };

  if (showForgotPassword) {
    return <ForgotPassword onCancel={() => setShowForgotPassword(false)} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Assinatura</Text>
      <BotaoVoltar onClick={onCancel} />

      {!isDeleted ? (
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Excluir assinatura</Text>
            <Text style={styles.sectionDescription}>
              Tem certeza que deseja excluir sua conta e cancelar a sua
              assinatura?
            </Text>
          </View>

          <Buttons onNext={() => setIsDeleted(true)} onCancel={onCancel}>
            Avançar
          </Buttons>
        </View>
      ) : (
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Excluir assinatura</Text>
            <Text style={styles.sectionDescription}>
              Digite a sua senha no campo abaixo para continuar.
            </Text>
          </View>

          <View
            style={[
              styles.inputContainer,
              errors.currentPassword ? styles.inputError : null,
            ]}
          >
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="**************"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholderTextColor="#999"
            />
          </View>
          {errors.currentPassword && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="cancel" size={16} color="red" />
              <Text style={styles.errorText}>{errors.currentPassword}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => setShowForgotPassword(true)}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('/seguranca/contaexcluida')}
            style={styles.hiddenLink}
          >
            <Buttons onNext={handleNext} onCancel={onCancel}>
              Avançar
            </Buttons>
          </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  inputError: {
    borderColor: 'red',
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
  forgotPassword: {
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    textDecorationLine: 'underline',
  },
  hiddenLink: {
    display: 'none',
  },
});

export default Excluir;