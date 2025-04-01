import { useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Icon name="home" size={24} color="#FFF" />
      <Text style={{ color: "#FFF", fontSize: 12, textAlign: "center" }}>Início</Text>
    </TouchableOpacity>
  );
};

export default Home;