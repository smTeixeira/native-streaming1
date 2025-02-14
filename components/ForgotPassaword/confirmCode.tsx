import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do FontAwesome
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importando ícones do MaterialIcons
import AddCode from './addCode';
import Buttons from '../Buttons/index';

interface ConfirmCodeProps {
  resetOption: "email" | "text";
  contactInfo: string;
}

const ConfirmCode = ({ resetOption, contactInfo }: ConfirmCodeProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

  const router = useRouter();

  const handleCodeComplete = (code: string) => {
    setCode(code);
    if (code === "123456") {
      setCodeError("");
      setShowResetPassword(true);
    } else {
      setCodeError("Código inválido. Tente novamente.");
    }
  };

  const handleConfirm = () => {
    if (code === "123456") {
      setIsSuccess(true);
    } else {
      setCodeError("Código inválido. Tente novamente.");
    }
  };

  const handleBack = () => {
    router.push("/forgot-password");
    setIsSuccess(false);
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setPasswordError("Os campos de senha não podem estar vazios.");
    } else if (newPassword !== confirmPassword) {
      setPasswordError("As senhas não coincidem. Tente novamente.");
    } else {
      setPasswordError("");
      setPasswordResetSuccess(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {passwordResetSuccess ? (
          <View style={styles.center}>
            <Text style={styles.successText}>Nova senha criada com sucesso!</Text>
            <Text style={styles.subText}>
              Sua senha foi atualizada com sucesso, agora sempre que for entrar em um novo dispositivo, use sua nova senha.
            </Text>
            <Buttons
              children="Ir para página de login"
              onCancel={() => router.push("/forgot-password")}
              onNext={() => router.push("/login")}
            />
          </View>
        ) : showResetPassword ? (
          <View>
            <Text style={styles.title}>Cadastre a nova senha</Text>
            <Text style={styles.subText}>
              Proteja sua conta com uma senha exclusiva de pelo menos seis caracteres.
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nova senha</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="********"
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <MaterialIcons name="visibility-off" size={24} color="white" />
                ) : (
                  <MaterialIcons name="visibility" size={24} color="white" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirme a nova senha</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="********"
                placeholderTextColor="#999"
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <MaterialIcons name="visibility-off" size={24} color="white" />
                ) : (
                  <MaterialIcons name="visibility" size={24} color="white" />
                )}
              </TouchableOpacity>
            </View>
            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
            <Buttons
              children="Cadastrar nova senha"
              onCancel={handleBack}
              onNext={handleResetPassword}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Confirme seu {resetOption === "email" ? "email" : "telefone"}</Text>
            <Text style={styles.subText}>
              Última etapa! Enviamos um código para {'\n'}
              <Text style={styles.boldText}>{contactInfo}</Text>. {'\n'}
              Informe-o abaixo para confirmar seu {resetOption === "email" ? "email" : "telefone"}.
            </Text>
            <AddCode length={6} onComplete={handleCodeComplete} />
            {codeError && (
              <View style={styles.errorContainer}>
                <Icon name="times-circle" size={24} color="red" />
                <Text style={styles.errorText}>{codeError}</Text>
              </View>
            )}
            <Buttons
              children="Confirmar"
              onCancel={handleBack}
              onNext={handleConfirm}
            />
          </View>
        )}
        {!showResetPassword && !passwordResetSuccess && (
          <TouchableOpacity onPress={() => console.log('Enviar código novamente')}>
            <Text style={styles.linkText}>Enviar código novamente</Text>
          </TouchableOpacity>
        )}
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
  center: {
    alignItems: 'center',
  },
  successText: {
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: 'white',
    marginBottom: 4,
  },
  input: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 4,
  },
  linkText: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 16,
  },
});

export default ConfirmCode;