import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do FontAwesome
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation para navegação
import { Checkbox } from './checkbox';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};


    if (!email) {
      newErrors.email = 'Informe seu email';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!password) {
      newErrors.password = 'Informe sua senha';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Entrar na Hands<Text style={styles.titleThin}>Play</Text>
        </Text>

        {/* Campo de Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.email ? styles.inputError : null]}
            placeholder={isEmailFocused || email ? '' : 'Email'}
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            keyboardType="email-address"
          />
          {(isEmailFocused || email) && (
            <Text style={styles.floatingLabel}>Email</Text>
          )}
          {errors.email && (
            <View style={styles.errorContainer}>
              <Icon name="times-circle" size={14} color="#FF4D4D" />
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
          )}
        </View>

        {/* Campo de Senha */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.password ? styles.inputError : null]}
            placeholder={isPasswordFocused || password ? '' : 'Senha'}
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            secureTextEntry
          />
          {(isPasswordFocused || password) && (
            <Text style={styles.floatingLabel}>Senha</Text>
          )}
          {errors.password && (
            <View style={styles.errorContainer}>
              <Icon name="times-circle" size={14} color="#FF4D4D" />
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          )}
        </View>

        <View style={styles.rememberContainer}>
          <TouchableOpacity>
            <Checkbox label="Lembrar senha" checked={isChecked} onChange={setIsChecked} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Entrar</Text>
            <Icon name="arrow-right" size={26} color="#000" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Novo na <Text style={styles.boldText}>HandsPlay</Text>?{' '}
            <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
              Clique aqui
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '90%',
  },
  card: {
    borderRadius: 8,
    padding: 16,
    width: '100%',
    maxWidth: 478,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleThin: {
    fontWeight: 'normal',
  },
  inputContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  input: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: 20,
  },
  floatingLabel: {
    position: 'absolute',
    left: 12,
    top: 6,
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 4,
  },
  inputError: {
    borderColor: '#FF4D4D',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  errorText: {
    color: '#FF4D4D',
    fontSize: 12,
    marginLeft: 4,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberText: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
  registerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#FFC107',
    fontWeight: 'bold',
  },
});

export default Login;