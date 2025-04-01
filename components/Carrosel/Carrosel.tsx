import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

export const lista = [
  {
    id: 1,
    title: "Filme 1",
    image: "https://picsum.photos/160/98",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    lancamento: "2022",
    tipo: "Filme" as "Filme",
    duracao: "2h 31m",
    genero: "Ação",
    cassificacao: "14",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    elenco: "Ator 1, Ator 2",
  },
  {
    id: 2,
    title: "Filme 2",
    image: "https://picsum.photos/160/121",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    lancamento: "2022",
    tipo: "Serie" as "Serie",
    duracao: "2h 30m",
    genero: "Ação",
    cassificacao: "14",
    descricao: "Descrição do Filme 1",
    elenco: "Ator 1, Ator 2",
  },
  {
    id: 3,
    title: "Filme 3",
    image: "https://picsum.photos/160/111",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    lancamento: "2022",
    tipo: "Filme",
    duracao: "2h 30m",
    genero: "Ação",
    cassificacao: "14",
    descricao: "Descrição do Filme 1",
    elenco: "Ator 1, Ator 2",
  },
];

interface CarrosselProps {
  modalIsOpen?: (movie: any) => void;
  genero?: string;
}

export interface Movie {
  id: number;
  title: string;
  image: string;
  src: string;
  lancamento: string;
  tipo?: "Filme" | "Serie";
  duracao: string;
  genero: string;
  cassificacao: string;
  descricao: string;
  elenco: string;
}

const { width: screenWidth } = Dimensions.get('window');

const Carrossel: React.FC<CarrosselProps> = ({ modalIsOpen, genero }) => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: Movie }) => {
    return (
      <TouchableOpacity onPress={() => modalIsOpen?.(item)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {genero && (
          <Text style={styles.genero}>
            {genero}
            <Icon name="chevron-right" size={16} color="#FFD700" />
          </Text>
        )}
        <TouchableOpacity>
          <Text style={styles.verTudo}>
            Ver tudo
            <Icon name="chevron-right" size={16} color="#FFD700" />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={lista}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.carouselContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  genero: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  verTudo: {
    color: "#FFF",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 90,
    borderRadius: 8,
    marginRight: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 8,
  },
  carouselContent: {
    // paddingHorizontal: 8, // Adiciona um pouco de espaço nas laterais
  },
});

export default Carrossel;