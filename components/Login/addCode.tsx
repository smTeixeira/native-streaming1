import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

interface ConfirmationCodeInputProps {
  length: number;
  onComplete: (code: string) => void;
}

const AddCode = ({ length, onComplete }: ConfirmationCodeInputProps) => {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [error, setError] = useState("");

  const handleChange = (text: string, index: number) => {
    if (text.match(/^[0-9]$/) || text === "") {
      const newValues = [...values];
      newValues[index] = text;
      setValues(newValues);
      setError(""); // Reset error on valid input

      if (text && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newValues.every((val) => val !== "")) {
        onComplete(newValues.join(""));
      }
    }
  };

  const handleKeyPress = (
    { nativeEvent: { key } }: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {values.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            style={[styles.input, error ? styles.inputError : null]}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#999"
          />
        ))}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    width: 40,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#FFF",
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
  },
});

export default AddCode;