import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BotaoVoltar } from '../Conta/botaoVoltar';
import { PremiumConfirm } from './premium';

interface ConfirmarPlanoProps {
  onCancel: () => void;
  onConfirm: (newPlan: string) => void;
}

const ConfirmarPlano = ({ onCancel, onConfirm }: ConfirmarPlanoProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirm = () => {
    setIsSuccess(true);
    onConfirm('premium');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!isSuccess ? (
        <View>
          <Text style={styles.title}>Assinatura</Text>
          <BotaoVoltar onClick={onCancel} />

          <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationTitle}>
              Confirme a alteração do seu plano
            </Text>
            <Text style={styles.confirmationDescription}>
              Tem certeza que quer trocar seu plano atual pelo premium?
            </Text>
          </View>

          <PremiumConfirm onCancel={onCancel} onNext={handleConfirm} />
        </View>
      ) : (
        <View>
          <BotaoVoltar onClick={onCancel} />
          <Text style={styles.successTitle}>
            Troca de plano realizada com sucesso!
          </Text>
          <Text style={styles.successDescription}>
            Parabéns pela troca do seu plano. Comece a assistir seus filmes e
            séries agora mesmo. Clique no botão abaixo e divirta-se =)
          </Text>
          <TouchableOpacity onPress={onCancel} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar para a segurança</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1C1B1B',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  confirmationContainer: {
    marginBottom: 20,
  },
  confirmationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  confirmationDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  successDescription: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
});

export default ConfirmarPlano;