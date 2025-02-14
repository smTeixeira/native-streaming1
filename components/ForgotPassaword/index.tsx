import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import MaskInput  from 'react-native-mask-input';
import Buttons from '../Buttons/index';
import ConfirmCode from './confirmCode';

interface ForgotPasswordProps {
  onCancel: () => void;
}

export const ForgotPassword = ({ onCancel }: ForgotPasswordProps) => {
  const [resetOption, setResetOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showEmailCode, setShowEmailCode] = useState(false);
  const [showCellCode, setShowCellCode] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleNext = () => {
    if (resetOption === "email") {
      if (!email) {
        setError("Por favor, insira um email válido.");
        return;
      } else if (!validateEmail(email)) {
        setError("Por favor, insira um email válido.");
        return;
      }
      setShowEmailCode(true);
    } else if (resetOption === "text") {
      if (!phone || phone.includes("_")) {
        setError("Por favor, insira um número de telefone válido.");
        return;
      }
      setShowCellCode(true);
    }
  };

  const validateEmail = (email: string) => {
    // Regex simples para validar e-mail
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  if (showEmailCode) {
    return <ConfirmCode resetOption="email" contactInfo={email} />;
  } else if (showCellCode) {
    return <ConfirmCode resetOption="text" contactInfo={phone} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Esqueci a senha</Text>
        <Text style={styles.subText}>
          De que forma você quer redefinir sua senha?
        </Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[styles.radioButton, resetOption === "email" && styles.radioButtonSelected]}
            onPress={() => {
              setResetOption("email");
              setError("");
            }}
          >
            <Text style={styles.radioText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, resetOption === "text" && styles.radioButtonSelected]}
            onPress={() => {
              setResetOption("text");
              setError("");
            }}
          >
            <Text style={styles.radioText}>Mensagem de texto</Text>
          </TouchableOpacity>
        </View>
        {resetOption === "email" ? (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Insira seu email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError("");
              }}
              placeholder="Digite seu email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Insira seu telefone</Text>
            <MaskInput
              style={styles.input}
              value={phone}
              onChangeText={(masked, unmasked) => {
                setPhone(unmasked); // Use unmasked para obter o valor sem a máscara
                setError("");
              }}
              mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="Digite seu telefone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Buttons onCancel={() => router.push("/login")} onNext={handleNext}>
          {resetOption === "email" ? "Continuar por email" : "Continuar por mensagem"}
        </Buttons>
      </View>
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
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: 'white',
  },
  radioText: {
    color: 'white',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 16,
  },
});

export default ForgotPassword;