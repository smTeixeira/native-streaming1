import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email === "") {
      setError("O email é obrigatório.");
      return;
    }

    console.log("Email salvo:", email);
    Alert.alert("Sucesso", "Email salvo com sucesso! Redirecionando...");
    navigation.navigate("Password");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Assista seus filmes, séries e documentários favoritos, sem limites
      </Text>
      <Text style={styles.subText}>
        Assista onde quiser em todos os dispositivos.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Insira o seu email para criar a sua assinatura
        </Text>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Avançar</Text>
          <Icon name="arrow-right" size={26} color="#000" />
        </View>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 32,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
  },
  inputError: {
    borderColor: "#FF4D4D",
  },
  errorText: {
    color: "#FF4D4D",
    fontSize: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#FFC107",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: "90%",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
  },
});

export default Register;
