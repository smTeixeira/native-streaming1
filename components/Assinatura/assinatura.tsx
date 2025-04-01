import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons'; // Importando ícones do Expo
import Planos from './planos';
import Excluir from './excluir';
import Pagamentos from './pagamentos';

const paymentData = [
  { date: '05/05/2024', plan: 'HANDPlay Plus', paymentMethod: 'MasterCard 3' },
  { date: '05/04/2024', plan: 'HANDPlay Plus', paymentMethod: 'MasterCard 3' },
  { date: '05/03/2024', plan: 'HANDPlay Plus', paymentMethod: 'MasterCard 3' },
  { date: '05/02/2024', plan: 'HANDPlay Standard', paymentMethod: 'MasterCard 10' },
  { date: '05/01/2024', plan: 'HANDPlay Standard', paymentMethod: 'MasterCard 10' },
  { date: '05/12/2023', plan: 'HANDPlay Standard', paymentMethod: 'Visa 5433' },
  { date: '05/11/2023', plan: 'HANDPlay Standard', paymentMethod: 'Visa 5433' },
];

const Assinatura = () => {
  const [viewAssinatura, setViewAssinatura] = useState(false);
  const [viewExcluir, setViewExcluir] = useState(false);
  const [viewPagamentos, setViewPagamentos] = useState(false);

  if (viewAssinatura) {
    return <Planos onCancel={() => setViewAssinatura(false)} />;
  }

  if (viewExcluir) {
    return <Excluir onCancel={() => setViewExcluir(false)} />;
  }

  if (viewPagamentos) {
    return <Pagamentos data={paymentData} onCancel={() => setViewPagamentos(false)} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Assinatura</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes da assinatura</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Plano Standard</Text>
          <Text style={styles.cardDescription}>
            Resolução de vídeo 1080p, assistir sem anúncios e muito mais.
          </Text>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => setViewAssinatura(true)}
            style={styles.cardItem}
          >
            <Text style={styles.cardItemText}>Alterar plano</Text>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes do pagamento</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Próximo pagamento</Text>
          <Text style={styles.cardDescription}>10 de junho de 2024</Text>
          <View style={styles.cardItem}>
            <Feather name="credit-card" size={20} color="white" />
            <Text style={styles.cardItemText}>•••• •••• •••• 3024</Text>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.cardItem}>
            <Text style={styles.cardItemText}>Gerenciar formas de pagamento</Text>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => setViewPagamentos(true)}
            style={styles.cardItem}
          >
            <Text style={styles.cardItemText}>Ver pagamentos</Text>
            <MaterialIcons name="navigate-next" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setViewExcluir(true)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>Excluir assinatura</Text>
        <Feather name="trash" size={20} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '300',
    color: 'white',
  },
  card: {
    backgroundColor: '#272727',
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 8,
    color: 'white',
  },
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cardItemText: {
    fontSize: 16,
    color: 'white',
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginRight: 8,
  },
});

export default Assinatura;