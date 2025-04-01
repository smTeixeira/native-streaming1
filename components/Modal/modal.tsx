import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import Carrossel from "../Carrosel/Carrosel";
import ButtonWhatch from "../VideoPlayerHome/ButtonWatch";
import MyListButton from "../VideoPlayerHome/MyListButton";
import CarrosselEp from "../Carrosel/CarroselEp";
import { temporadas } from "../VideoPlayerHome/videoPlayerHome";
import { useNavigation } from "@react-navigation/native";

export interface ModalProps {
  isSoon: boolean;
  onClose: () => void;
  id?: string;
  titulos?: string;
  lancamento: string;
  tipo: "Filme" | "Série";
  duracao: string;
  genero?: string;
  cassificacao: string;
  descricao: string;
  elenco: string;
  src: string;
  episodios?: string[];
  temporadas?: string[];
}

const getClassificacaoColor = (classificacao: string): string => {
  switch (classificacao) {
    case "L":
      return "green";
    case "10":
      return "blue";
    case "12":
      return "yellow";
    case "14":
      return "orange";
    case "16":
      return "red";
    case "18":
      return "darkred";
    default:
      return "grey";
  }
};

const ModalComponent: React.FC<ModalProps> = ({ onClose, ...props }) => {
  const videoRef = useRef<Video>(null);
  const classificacaoColor = getClassificacaoColor(props.cassificacao);
  const navigation = useNavigation();

  const handleWatch = () => {
    navigation.navigate("VideoPlayer");
    navigation.setOptions({ title: props.titulos });
    onClose();
  };

  return (
    <View>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
              <Icon name="close-circle-outline" size={35} color="white" />
            </TouchableOpacity>
          </View>

          <Video
            ref={videoRef}
            source={{ uri: props.src }}
            style={styles.video}
            resizeMode="contain"
            shouldPlay
            isLooping
            isMuted
            useNativeControls={false}
          />

          {props.isSoon ? (
            <View style={styles.soonContainer}>
              <TouchableOpacity style={styles.soonButton}>
                <MaterialIcons name="notifications" size={32} color="black" />
                <Text style={styles.soonButtonText}>Lembrar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonsContainer}>
              <ButtonWhatch onPress={handleWatch} />
              <MyListButton />
            </View>
          )}

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>{props.lancamento}</Text>
              <MaterialIcons name="circle" size={8} color="white" />
              <Text style={styles.infoText}>{props.tipo}</Text>
              <MaterialIcons name="circle" size={8} color="white" />
              <Text style={styles.infoText}>{props.duracao}</Text>
              <MaterialIcons name="circle" size={8} color="white" />
              <Text
                style={[
                  styles.classificacaoText,
                  { backgroundColor: classificacaoColor },
                ]}
              >
                A{props.cassificacao}
              </Text>
            </View>

            <Text style={styles.description}>{props.descricao}</Text>

            {props.isSoon === false && props.tipo === "Série" && (
              <View style={styles.carrosselEpContainer}>
                <CarrosselEp
                  px="0"
                  py="20px"
                  showCloseButton={false}
                  temporadas={temporadas}
                />
              </View>
            )}

            <View style={styles.containerVideo}>

            </View>

            <View style={styles.suggestionsContainer}>
              <Carrossel genero="Sugestões para você" modalIsOpen={onClose} />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.detailsTitle}>
                Informações sobre{" "}
                <Text style={styles.detailsTitleBold}>{props.titulos}</Text>
              </Text>
              <Text style={styles.detailsText}>
                <Text style={styles.detailsLabel}>Elenco: </Text>
                {props.elenco}
              </Text>
              <Text style={styles.detailsText}>
                <Text style={styles.detailsLabel}>Gênero: </Text>
                {props.genero}
              </Text>
              <Text style={styles.detailsText}>
                <Text style={styles.detailsLabel}>Classificação etária: </Text>
                <Text
                  style={[
                    styles.classificacaoText,
                    { backgroundColor: classificacaoColor },
                  ]}
                >
                  A{props.cassificacao}
                </Text>
              </Text>
              <Text style={styles.detailsText}>
                Não recomendado para menores de {props.cassificacao} anos
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#1C1B1B",
  },
  modalContent: {
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço
  },
  closeButtonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 8,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 14,
    marginRight: 5,
  },
  video: {
    width: "100%",
    height: 250,
  },
  soonContainer: {
    padding: 10,
  },
  soonButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
  },
  soonButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  infoContainer: {
    padding: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 20,
  },
  infoText: {
    color: "#FFF",
    fontSize: 14,
  },
  classificacaoText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  description: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 20,
  },
  carrosselEpContainer: {
    marginBottom: 20,
  },
  suggestionsContainer: {
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailsTitle: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
  },
  detailsTitleBold: {
    fontWeight: "bold",
  },
  detailsText: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 5,
  },
  detailsLabel: {
    color: "#888",
  },
  containerVideo: {
    width: Dimensions.get("window").width * 0.95,
    height: 200,
    backgroundColor: "#000",
    borderRadius: 8,
  },
});

export default ModalComponent;