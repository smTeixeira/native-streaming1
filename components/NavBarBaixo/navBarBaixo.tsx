import React from "react";
import { View, StyleSheet } from "react-native";
import Home from "./home";
import Search from "./search";
import Profile from "./profile";

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.iconContainer}>
        <Home />
      </View>
      <View style={styles.iconContainer}>
        <Search />
      </View>
      <View style={styles.iconContainer}>
        <Profile />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    alignItems: "center",
    backgroundColor: "#1C1B1B",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  iconContainer: {
    alignItems: "center",
  },
});

export default Navbar;