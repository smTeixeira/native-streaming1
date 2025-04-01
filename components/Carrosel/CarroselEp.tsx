import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../Card/Card";

export interface CarrosselEpProps {
  temporadas: {
    title: string;
    episodes: {
      title: string;
      description: string;
      image: string;
    }[];
  }[];
  showCloseButton?: boolean;
  onClose?: () => void;
  px?: string;
  py?: string;
}

const CarrosselEp: React.FC<CarrosselEpProps> = ({
  onClose,
  temporadas,
  showCloseButton,
  px,
  py,
}) => {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [seasons, setSeasons] = useState(false);

  const handleSeasonSelect = (index: number) => {
    setSelectedSeason(index);
    setSeasons(false);
  };

  const renderEpisode = ({ item, index }) => (
    <View style={styles.episodeContainer}>
      <Card image={item.image} title={item.title} />
      <Text style={styles.episodeTitle}>
        EP {index + 1}: {item.title}
      </Text>
      <Text style={styles.episodeDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {showCloseButton && (
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={32} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}

      <View style={[styles.padding, { paddingVertical: py ? parseInt(py) : 0, paddingHorizontal: px ? parseInt(px) : 0 }]}>        
        <View style={styles.header}>
          <Text style={styles.headerText}>Episódios</Text>
          <TouchableOpacity onPress={() => setSeasons(!seasons)} style={styles.seasonSelector}>
            <Text style={styles.seasonText}>{temporadas[selectedSeason].title}</Text>
            <Icon name="angle-down" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={temporadas[selectedSeason].episodes}
          renderItem={renderEpisode}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.carouselContent}
        />
      </View>

      <Modal visible={seasons} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.closeModalButton} onPress={() => setSeasons(false)}>
            <MaterialIcons name="close" size={32} color="white" />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <FlatList
              data={temporadas}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleSeasonSelect(index)} style={styles.seasonItem}>
                  <Text style={styles.seasonItemText}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
  seasonSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 5,
    padding: 8,
  },
  seasonText: {
    color: "#FFF",
    fontSize: 14,
    marginRight: 5,
  },
  episodeContainer: {
    width: Dimensions.get("window").width * 0.4,
    marginRight: 10,
  },
  episodeTitle: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 10,
  },
  episodeDescription: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 5,
  },
  carouselContent: {
    paddingHorizontal: 8,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeModalButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  modalContent: {
    width: 428,
    height: 300,
    justifyContent: "center",
  },
  seasonItem: {
    marginBottom: 20,
  },
  seasonItemText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CarrosselEp;
