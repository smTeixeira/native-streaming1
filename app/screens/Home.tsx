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
} from "react-native";
import Carrossel, { Movie } from "@/components/Carrosel/Carrosel";
import NavCima from "@/components/NavBarCima/NavBarCima";
import NavBaixo from "@/components/NavBarBaixo/navBarBaixo";
import VideoPlayerHome from "@/components/VideoPlayerHome/videoPlayerHome";
import ModalComponent from "@/components/Modal/modal";

const generos = [
  { id: "Minha-lista", title: "Minha lista" },
  { id: "Ação", title: "Ação" },
  { id: "Animação", title: "Animação" },
  { id: "Aventura", title: "Aventura" },
  { id: "Comédia", title: "Comédia" },
  { id: "Drama", title: "Drama" },
  { id: "Ficção Científica", title: "Ficção Científica" },
  { id: "Fantasia", title: "Fantasia" },
  { id: "Mistério", title: "Mistério" },
  { id: "Romance", title: "Romance" },
  { id: "Terror", title: "Terror" },
];

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.navCimaContainer}>
        <NavCima />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.videoContainer}>
          <VideoPlayerHome
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="mp4" modalIsOpen={false}          />
        </View>

        <View style={styles.carrosselContainer}>
          {generos.map((genero) => (
            <View key={genero.id} style={styles.carrosselItem}>
              <Carrossel genero={genero.title} modalIsOpen={openModal} />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal fora do ScrollView */}
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
              tipo={selectedMovie.tipo}
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
  },
  navCimaContainer: {
    width: "100%",
    position: "relative",
    top: 0,
    zIndex: 40,
  },
  scrolledNav: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  transparentNav: {
    backgroundColor: "transparent",
  },
  videoContainer: {
    width: "100%",
  },
  carrosselContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  carrosselItem: {
    marginBottom: 30,
  },
  navBaixoContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;