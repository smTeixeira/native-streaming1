import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from "@expo/vector-icons"; 
import { Seguranca } from "./seguranca"; 
import {BotaoVoltar} from "./botaoVoltar"; 
import Assinatura from "../Assinatura/assinatura"; 
import Autenticacao from "../GerenciarPerfis/autenticacao"; 

export function Opcoes() {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  const returnToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <ScrollView horizontal style={styles.optionsRow}>
          <View style={styles.backButtonContainer}>
            {/* <BotaoVoltar onClick={returnToHome} /> */}
          </View>

          <TouchableOpacity
            style={[
              styles.option,
              activeOption === "assinatura" && styles.activeOption,
            ]}
            onPress={() => handleOptionClick("assinatura")}
          >
            <MaterialCommunityIcons name="credit-card" size={20} color="white" />
            <Text style={styles.optionText}>Assinatura</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              activeOption === "seguranca" && styles.activeOption,
            ]}
            onPress={() => handleOptionClick("seguranca")}
          >
            <MaterialIcons name="security" size={20} color="white" />
            <Text style={styles.optionText}>Segurança</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              activeOption === "gerenciar-perfis" && styles.activeOption,
            ]}
            onPress={() => handleOptionClick("gerenciar-perfis")}
          >
            <Ionicons name="happy" size={20} color="white" />
            <Text style={styles.optionText}>Gerenciar perfis</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        {activeOption === "seguranca" && <Seguranca />}
        {activeOption === "assinatura" && <Assinatura />}
        {activeOption === "gerenciar-perfis" && <Autenticacao />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionsRow: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    
  },
  backButtonContainer: {
    marginRight: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  activeOption: {
    backgroundColor: "#3F3F3F", // Cor de fundo para opção ativa
  },
  optionText: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
  },
});

export default Opcoes;