import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "@/components/NavBarBaixo/navBarBaixo"; 
import NavbarCima from "@/components/NavBarCima/NavBarCima"; 
import TrocarPerfil from "@/components/TrocaPerfil/index"; 
import NavBaixo from "@/components/NavBarBaixo/navBarBaixo";
import { NotificationProvider } from "@/contexts/NotificationContext";

const MinhaHandsplay = () => {
  const [menuOpen, setMenuIsOpen] = useState(false);
  return (
    <NotificationProvider>

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <NavbarCima menuIsOpen={menuOpen} />
            <Text style={styles.title}>Minha HANDSplay</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <TrocarPerfil />
          </ScrollView>

          <View style={styles.navbarBottom}>
            <Navbar />
          </View>
        </View>

        <View style={styles.navBaixoContainer}>
          <NavBaixo />
        </View>
      </View>
    </NotificationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  content: {
    flex: 1,
    maxWidth: 900, 
    width: "100%",
    alignSelf: "center", 
  },
  header: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    marginLeft: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, 
  },
  navbarBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    display: "none", 
  },
  navBaixoContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
});

export default MinhaHandsplay;