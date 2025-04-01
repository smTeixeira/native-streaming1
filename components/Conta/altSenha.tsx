import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import { BotaoVoltar } from './botaoVoltar';
import Buttons from '../Buttons/buttons';
import { ForgotPassword } from './esqueciSenha';

interface AltSenhaProps {
  onCancel: () => void;
}

export const AltSenha = ({ onCancel }: AltSenhaProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.values(validationErrors).every((error) => error === '')) {
      setIsSuccess(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };

    if (!currentPassword) {
      errors.currentPassword = 'Senha atual é obrigatória.';
    }

    if (!newPassword) {
      errors.newPassword = 'Nova senha é obrigatória.';
    } else if (newPassword.length < 6) {
      errors.newPassword = 'A nova senha deve ter pelo menos 6 caracteres.';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Informe a nova senha e deve ser igual à sua nova senha.';
    } else if (confirmPassword !== newPassword) {
      errors.confirmPassword = 'As senhas não coincidem.';
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
      <BotaoVoltar onClick={onCancel} />
      {!isSuccess ? (
        <>
          <Text style={styles.title}>Alterar senha</Text>
          <Text style={styles.description}>
            Proteja sua conta com uma senha exclusiva de pelo menos seis caracteres
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.currentPassword ? styles.inputError : null]}
              placeholder="Senha atual"
              placeholderTextColor="#999"
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
            />
            {errors.currentPassword && (
              <View style={styles.errorContainer}>
                <MaterialIcons name="cancel" size={16} color="red" />
                <Text style={styles.errorText}>{errors.currentPassword}</Text>
              </View>
            )}
            <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.newPassword ? styles.inputError : null]}
              placeholder="Nova senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            {errors.newPassword && (
              <View style={styles.errorContainer}>
                <MaterialIcons name="cancel" size={16} color="red" />
                <Text style={styles.errorText}>{errors.newPassword}</Text>
              </View>
            )}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
              placeholder="Confirme a nova senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {errors.confirmPassword && (
              <View style={styles.errorContainer}>
                <MaterialIcons name="cancel" size={16} color="red" />
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              </View>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Buttons onCancel={onCancel} onNext={handleNext}>
              Salvar nova senha
            </Buttons>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.successTitle}>Nova senha criada com sucesso!</Text>
          <Text style={styles.successDescription}>
            Sua senha foi atualizada com sucesso, agora sempre que for entrar em um novo dispositivo, use sua nova senha.
          </Text>
          <TouchableOpacity onPress={onCancel} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar para a segurança</Text>
          </TouchableOpacity>
        </>
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
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  inputError: {
    borderColor: 'red',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  successDescription: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AltSenha;