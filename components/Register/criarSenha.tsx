import { useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CreatePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const storedEmail = "example@example.com";
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = () => {
    if (password === "") {
      setError("A senha é obrigatória.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    console.log("Senha criada com sucesso");
    setIsPasswordValid(true);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    if (text !== "") {
      setError("");
    }
  };

  const handleEmailVerification = () => {
    setIsEmailVerified(true);
  };

  if (isEmailVerified) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require("../../assets/checked.png")}
            style={styles.image}
          />
          <View style={styles.containerText}>
            <Text style={styles.title2}>Email verificado com sucesso!</Text>
            <Text style={styles.subText2}>
              Seu email está validado, agora você ficará informado de todas as
              novidades da <Text style={styles.boldText}>HandsPlay</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signature")}
          >
            <Text style={styles.buttonText}>Próximo passo</Text>
            <Icon name="arrow-right" size={26} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (isPasswordValid) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            source={require("../../assets/alerta.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Verifique seu email</Text>
          <Text style={styles.subText}>
            Para confirmar, clique no link que enviamos para {"\n"}
            <Text style={styles.boldText}>{email}</Text>
          </Text>
          <Text style={styles.subText}>
            A verificação do seu email aumenta a segurança da conta e ajuda você
            a receber comunicações importantes da HandsPlay.
          </Text>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleEmailVerification}
          >
            <Text style={styles.secondaryButtonText}>Pular</Text>
            <Icon name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Bem vindo a Hands<Text style={styles.span}>Play</Text>
        </Text>
        <Text style={styles.subText}>Crie uma senha para sua assinatura</Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Crie uma senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        {error && (
          <View style={styles.errorContainer}>
            <Icon name="times-circle" size={14} color="#FF4D4D" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Próximo passo</Text>
        <Icon name="arrow-right" size={26} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C1B1B",
    padding: 16,
    width: "100%",
  },
  containerText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 52,
  },
  center: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "justify",
  },
  span: {
    fontWeight: "thin",
  },
  subText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
    textAlign: "justify",
  },
  boldText: {
    fontWeight: "bold",
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
    textAlign: "center",
  },
  subText2: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  emailContainer: {
    marginBottom: 16,
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 4,
  },
  emailText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
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
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  errorText: {
    color: "#FF4D4D",
    fontSize: 12,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#FFC107",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 50,
  },
});

export default CreatePassword;
