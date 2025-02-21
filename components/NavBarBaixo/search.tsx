import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Search: React.FC = () => {
  return (
    <TouchableOpacity>
      <Icon name="search" size={24} color="#FFF" />
      <Text style={{ color: "#FFF", fontSize: 12, textAlign: "center" }}>Buscar</Text>
    </TouchableOpacity>
  );
};

export default Search;