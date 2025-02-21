import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonsProps {
  onCancel: () => void;
  onNext: () => void;
  children: string;
}

const Buttons = ({ onCancel, onNext, children }: ButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextButtonText}>{children}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  cancelButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
    padding: 12,
  },
  cancelButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
    padding: 12,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Buttons;
