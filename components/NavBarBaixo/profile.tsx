import { useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const Profile: React.FC = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate("MinhaHandsplay")}>
      <Image
        source={require("../../assets/profile.png")}
        style={{ width: 32, height: 32 }}
      />
      <Text style={{ color: "#FFF", fontSize: 12, marginTop: 4, textAlign: "center" }}>
        Minha HANDSplay
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Profile;
