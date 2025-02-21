import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const MyListButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name="plus" size={20} color="#FFF" />
      <Text style={styles.text}>Minha Lista</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    gap: 10,
    width: "48%",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyListButton;