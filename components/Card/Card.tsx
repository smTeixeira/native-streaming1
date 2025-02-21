import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

interface ICard {
  image: string | number; // Pode ser uma string (URL) ou número (imagem local)
  title?: string;
  onPress?: () => void;
}

const Card: React.FC<ICard> = ({ image, title, onPress }) => {
  const imageSource = typeof image === "string" ? { uri: image } : image;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para sombra no Android
  },
  image: {
    width: "100%",
    height: 200, // Ajuste a altura conforme necessário
    resizeMode: "cover",
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Card;