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
import NotificationBell from "./notification";
import { useNotification } from "@/contexts/NotificationContext";

interface NavItem {
  menuIsOpen: boolean;
}

const Navbar: React.FC<NavItem> = ({ menuIsOpen }) => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { addNotification } = useNotification();

  const handleAddNotification = () => {
    addNotification('Nova notificação!');
  };

  const navItems = [
    { link: "Destaques", path: "Home" },
    { link: "Minha lista", path: "MyList" },
    { link: "Filmes", path: "Filmes" },
    { link: "Series", path: "Series" },
    { link: "Noticias", path: "News" },
    { link: "Documentários", path: "Documentaries" },
    { link: "Em breve", path: "EmBreve" },
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

        <View>
          <NotificationBell />
        </View>
      </View>

      <ScrollView
        horizontal={true}
        style={[
          styles.menu,
          menuIsOpen ? styles.menuVisible : styles.menuHidden,
        ]}
      >
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
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1B1B",
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  logo: {
    height: 55,
    width: 100,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  menu: {
    backgroundColor: "#1C1B1B",
    padding: 10,
    flexDirection: "row",
    zIndex: 1,
  },
  menuVisible: {
    display: "flex", 
  },
  menuHidden: {
    display: "none", 
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
