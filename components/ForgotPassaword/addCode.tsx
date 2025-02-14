import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GiCancel } from "react-icons/gi"; // Note: react-icons is not compatible with React Native

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

  const handleKeyDown = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (values.every((val) => val !== "")) {
      onComplete(values.join(""));
    } else {
      setError("Todos os campos devem ser preenchidos.");
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
            onKeyPress={(e) => handleKeyDown(e, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  input: {
    width: 40,
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  inputError: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddCode;