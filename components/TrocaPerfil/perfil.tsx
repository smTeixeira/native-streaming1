import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ProfileItemProps {
  name: string;
  imageSrc: any; 
}

const Perfil = ({ name, imageSrc }: ProfileItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <Image source={imageSrc} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1C1B1B",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    color: "white",
    fontSize: 16,
  },
});

export default Perfil;