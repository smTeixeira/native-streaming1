import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do FontAwesome
import Sucesso from './sucesso';
import Negado from './negado';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

const Planos = () => {
  const [success, setSuccess] = useState(false);
  const [negado, setNegado] = useState(false);

  if (success) {
    return <Sucesso />;
  }

  if (negado) {
    return <Negado />;
  }

  const handleSelectPlan = () => {
    setSuccess(true);
  };

  const handleNegado = () => {
    setNegado(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/arrow.png')} style={styles.image} />
        </View>
        <Text style={styles.title}>Selecionar o seu plano</Text>
        <View style={styles.benefitsContainer}>
          <View style={styles.benefitItem}>
            <Icon name="check" size={24} color="yellow" />
            <Text style={styles.benefitText}>Sem compromisso, cancele quando quiser.</Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="check" size={24} color="yellow" />
            <Text style={styles.benefitText}>Entretenimento sem fim, por um preço baixo.</Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="check" size={24} color="yellow" />
            <Text style={styles.benefitText}>Divirta-se com a Handsplay, em qualquer tipo de aparelho.</Text>
          </View>
        </View>

        <View style={styles.plansContainer}>
          {/* Plano Standard */}
          <View style={styles.planCard}>
            <Text style={styles.planTitle}>Plano Standard</Text>
            <Text style={styles.planDescription}>
              Neste plano você tem os seguintes benefícios:
            </Text>
            <View style={styles.planBenefits}>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista seus vídeos em Full HD (1080)</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Sem anúncios</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista em até 2 aparelhos simultaneamente</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista em celulares, tablets e computadores</Text>
              </View>
            </View>
            <Text style={styles.planPrice}>R$ 39,00/mês</Text>
            <TouchableOpacity style={styles.planButton} onPress={handleSelectPlan}>
              <Text style={styles.planButtonText}>Selecionar</Text>
            </TouchableOpacity>
          </View>

          {/* Plano Premium */}
          <View style={styles.planCard}>
            <Text style={styles.planTitle}>Plano Premium</Text>
            <Text style={styles.planDescription}>
              Neste plano você tem os seguintes benefícios:
            </Text>
            <View style={styles.planBenefits}>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista seus vídeos em Ultra HD (4k), HDR e Áudio espacial</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Sem anúncios</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista em até 6 aparelhos simultaneamente</Text>
              </View>
              <View style={styles.benefitItem}>
                <Icon name="dot-circle-o" size={14} color="white" />
                <Text style={styles.benefitText}>Assista em celulares, tablets e computadores</Text>
              </View>
            </View>
            <Text style={styles.planPrice}>R$ 55,90/mês</Text>
            <TouchableOpacity style={styles.planButton} onPress={handleNegado}>
              <Text style={styles.planButtonText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  container: {
    width: '100%',
    maxWidth: 400,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 87,
    height: 87,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitsContainer: {
    marginBottom: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    flexShrink: 1, // Permite que o texto quebre em várias linhas
  },
  plansContainer: {
    width: '100%',
  },
  planCard: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%', // Ajusta a largura para ocupar 100% do espaço disponível
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  planBenefits: {
    marginBottom: 20,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  planButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  planButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Planos;