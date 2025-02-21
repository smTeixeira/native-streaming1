import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";

const Navbar: React.FC = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(true);

  const navItems = [
    { link: "Destaques", path: "Home" },
    { link: "Minha lista", path: "MyList" },
    { link: "Filmes", path: "Movies" },
    { link: "Series", path: "Series" },
    { link: "Noticias", path: "News" },
    { link: "Documentários", path: "Documentaries" },
    { link: "Em breve", path: "ComingSoon" },
    { link: "Conheça o mãos tagarelas", path: "About" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={toggleMenu}>

          </TouchableOpacity>
        </View>
      </View>
      {menuOpen && (
        <ScrollView horizontal={true} style={styles.menu}>
          {navItems.map(({ link, path }) => (
            <TouchableOpacity
              key={link}
              onPress={() => {
                navigation.navigate(path);
              }}
              style={styles.menuItem}
            >
              <Text style={styles.menuText}>{link}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1B1B",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logo: {
    height: 55,
    width: 100,
    resizeMode: "contain",
    marginTop: 30,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 30,
  },
  menu: {
    backgroundColor: "#1C1B1B",
    padding: 10,
    flexDirection: "row",
    zIndex: 1,
  },
  menuItem: {
    paddingHorizontal: 10,
  },
  menuText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Navbar;
