import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from "react-native";
import { lista, Movie } from "@/components/Carrosel/Carrosel"; // Ajuste o caminho conforme necessário
import NavCima from "@/components/NavBarCima/NavBarCima"; // Ajuste o caminho conforme necessário
import NavBaixo from "@/components/NavBarBaixo/navBarBaixo"; // Ajuste o caminho conforme necessário
import ModalComponent from "@/components/Modal/modal"; // Ajuste o caminho conforme necessário
import { NotificationProvider } from "@/contexts/NotificationContext"; // Ajuste o caminho conforme necessário
import { useNavigation } from "@react-navigation/native"; // Para navegação
import { Ionicons } from "@expo/vector-icons"; // Para ícones

const generos = [
  { id: "Todos", title: "Todos" },
  { id: "Ação", title: "Ação" },
  { id: "Animação", title: "Animação" },
  { id: "Ficção Científica", title: "Ficção Científica" },
  { id: "Terror", title: "Terror" },
  { id: "Romance", title: "Romance" },
];

const MyList = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const navigation = useNavigation();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  const returnHome = () => {
    navigation.goBack();
  };

  return (
    <NotificationProvider>
      <View style={styles.container}>
        <View style={[styles.navCimaContainer, scrolled && styles.scrolledNav]}>
          <NavCima menuIsOpen={true} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={returnHome} style={styles.closeButton}>
              <Ionicons name="close-circle" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Minha lista</Text>
          </View>

          <View style={styles.grid}>
            {lista.map((filme) => (
              <TouchableOpacity
                key={filme.id}
                onPress={() => openModal(filme as Movie)}
                style={styles.card}
              >
                <Image source={{ uri: filme.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{filme.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {modalIsOpen && selectedMovie && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalIsOpen}
            onRequestClose={closeModal}
          >
            <View style={styles.modalOverlay}>
              <ModalComponent
                isSoon={false}
                onClose={closeModal}
                src={selectedMovie.src}
                titulos={selectedMovie.title}
                lancamento={selectedMovie.lancamento}
                tipo={selectedMovie.tipo === "Serie" ? "Série" : selectedMovie.tipo || "Filme"}
                duracao={selectedMovie.duracao}
                cassificacao={selectedMovie.cassificacao}
                descricao={selectedMovie.descricao}
                elenco={selectedMovie.elenco}
              />
            </View>
          </Modal>
        )}

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
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 80, // Adiciona espaço para a navbar inferior
  },
  navCimaContainer: {
    width: "100%",
    position: "relative",
    top: 0,
    zIndex: 40,
    backgroundColor: "black",
  },
  scrolledNav: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  closeButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  card: {
    width: "45%",
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  navBaixoContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default MyList;