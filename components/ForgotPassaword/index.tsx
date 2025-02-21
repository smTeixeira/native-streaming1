import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "expo-router";
import MaskInput from "react-native-mask-input";
import Buttons from "../Buttons/buttons";
import ConfirmCode from "./confirmCode";

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

  const navigation = useNavigation();

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

        {/* Input de rádio para escolher entre email e celular */}
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => {
              setResetOption("email");
              setError("");
            }}
          >
            <View style={styles.radioCircle}>
              {resetOption === "email" && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => {
              setResetOption("text");
              setError("");
            }}
          >
            <View style={styles.radioCircle}>
              {resetOption === "text" && <View style={styles.selectedRb} />}
            </View>
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
                setPhone(unmasked);
                setError("");
              }}
              mask={[
                "(",/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,]}
              placeholder="Digite seu telefone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Buttons
          onCancel={() => navigation.navigate("Login")}
          onNext={handleNext}
        >
          {resetOption === "email"
            ? "Continuar por email"
            : "Continuar por mensagem"}
        </Buttons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 16,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    width: "98%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: "white",
    marginBottom: 16,
    textAlign: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,

  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "white",
    paddingRight: 18,
    paddingLeft: 12,
    paddingVertical: 12,
    width: 162,
    borderRadius: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  radioText: {
    color: "white",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "white",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 16,
  },
});

export default ForgotPassword;
