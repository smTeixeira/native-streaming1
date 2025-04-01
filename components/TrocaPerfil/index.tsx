import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; 
import Perfil from "./perfil"; 

const profiles = [
  { name: "Daniela", imageSrc: require("../../assets/avatar1.jpg") }, 
  { name: "Victória", imageSrc: require("../../assets/avatar1.jpg") },
  { name: "Camilo", imageSrc: require("../../assets/avatar1.jpg") },
];

const TrocarPerfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trocar Perfil</Text>

      <View style={styles.profilesContainer}>
        {profiles.map((profile) => (
          <Perfil
            key={profile.name}
            imageSrc={profile.imageSrc}
            name={profile.name}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Seguranca")} 
      >
        <Image
          source={require("../../assets/avatar4.png")} 
          style={styles.avatar}
        />
        <Text style={styles.buttonText}>Assinaturas e configurações</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Ionicons name="exit" size={30} color="white" />
        <Text style={styles.buttonText}>
          Sair da <Text style={styles.boldText}>HANDSplay</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 24,
  },
  profilesContainer: {
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 16,
  },
});

export default TrocarPerfil;