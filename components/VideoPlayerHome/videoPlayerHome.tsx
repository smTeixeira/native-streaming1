import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome6";
import ButtonWhatch from "./ButtonWatch";
import MyListButton from "./MyListButton";
import WordModal from "../ModalCard/ModalCard";

interface VideoPlayerHomeProps {
  src: string;
  type: string;
  modalIsOpen: boolean;
  toggleModal?: () => void;
}

export const temporadas = [
  {
    title: "Temporada 1",
    episodes: [
      {
        title: "Pilot",
        description: "Leonard e Sheldon conhecem a vizinha Penny.",
        image: require("../../assets/imagens/image1.jpg"),
      },
      {
        title: "The Big Bran Hypothesis",
        description: "Sheldon reorganiza o apartamento de Penny.",
        image: require("../../assets/imagens/image2.jpg"),
      },
      {
        title: "The Fuzzy Boots Corollary",
        description: "Leonard pede Penny para sair.",
        image: require("../../assets/imagens/image3.jpg"),
      },
      {
        title: "The Fuzzy Boots Corollary",
        description: "Leonard pede Penny para sair.",
        image: require("../../assets/imagens/image4.jpg"),
      },
      {
        title: "The Fuzzy Boots Corollary",
        description: "Leonard pede Penny para sair.",
        image: require("../../assets/imagens/image5.jpg"),
      },
    ],
  },
  {
    title: "Temporada 2",
    episodes: [
      {
        title: "The Bad Fish Paradigm",
        description:
          "Penny e Leonard lidam com as consequências do primeiro encontro.",
        image: "/imagens/image4.jpg",
      },
      {
        title: "The Codpiece Topology",
        description: "Leonard começa a namorar Leslie Winkle.",
        image: "/imagens/image5.jpg",
      },
      {
        title: "The Barbarian Sublimation",
        description: "Sheldon vicia Penny em um videogame online.",
        image: "/imagens/image6.jpg",
      },
    ],
  },
  {
    title: "Temporada 3",
    episodes: [
      {
        title: "The Electric Can Opener Fluctuation",
        description:
          "Sheldon se muda para o Texas depois de ser enganado pelos amigos.",
        image: "/imagens/image1.jpg",
      },
      {
        title: "The Jiminy Conjecture",
        description: "Leonard e Penny tentam ajustar seu relacionamento.",
        image: "/imagens/image2.jpg",
      },
      {
        title: "The Gothowitz Deviation",
        description: "Sheldon tenta modificar o comportamento de Penny.",
        image: "/imagens/image3.jpg",
      },
    ],
  },
  {
    title: "Temporada 4",
    episodes: [
      {
        title: "The Robotic Manipulation",
        description: "Sheldon vai em seu primeiro encontro.",
        image: "/imagens/image4.jpg",
      },
      {
        title: "The Cruciferous Vegetable Amplification",
        description: "Sheldon tenta se tornar imortal.",
        image: "/imagens/image5.jpg",
      },
      {
        title: "The Zazzy Substitution",
        description: "Sheldon adota uma dúzia de gatos.",
        image: "/imagens/image3.jpg",
      },
    ],
  },
];

const VideoPlayerHome: React.FC<VideoPlayerHomeProps> = ({
  src,
  type,
  modalIsOpen,
  toggleModal,
}) => {
  const videoRef = useRef<Video>(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: src }}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
        useNativeControls={false}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          <WordModal content="As tranças do Rei Careca" />
        </Text>
        {!modalIsOpen && (
          <Text style={styles.description}>
            Aqui é uma descrição muito legal, as tranças do rei careca que nunca
            foram vistas no reino de tao tao distante.
          </Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonWhatch />
        {/* {!modalIsOpen && (
          <TouchableOpacity style={styles.infoButton}>
            <Icon name="info" size={24} color="#FFF" />
          </TouchableOpacity>
        )} */}
        <MyListButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.4,
    opacity: 0.3,
  },
  content: {
    position: "absolute",
    top: 100,
    left: 20,
    width: "60%",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 10,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    maxWidth: "90%",
  },
  infoButton: {
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideoPlayerHome;