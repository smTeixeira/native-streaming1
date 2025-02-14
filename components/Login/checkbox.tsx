import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export const Checkbox = ({ label, checked, onChange }: { 
  label: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
}) => {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={styles.checkboxContainer}
    >
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <Text style={styles.checkMark}>✔</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  checkedCheckbox: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  checkMark: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'thin',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
});

