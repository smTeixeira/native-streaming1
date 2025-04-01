import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { BotaoVoltar } from '../Conta/botaoVoltar';
import ConfirmarPlano from './confirmarPlanoPremium';
import ConfirmarPlanoStandard from './confirmarPlanoStandard';
import { Standard } from './standard';
import { Premium } from './premium';

interface PlanosProps {
  onCancel: () => void;
}

const Planos = ({ onCancel }: PlanosProps) => {
  const [viewConfirmarPlano, setViewConfirmarPlano] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('standard');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleUpgrade = (newPlan: string) => {
    setCurrentPlan(newPlan);
    setViewConfirmarPlano(false);
  };

  if (viewConfirmarPlano) {
    return selectedPlan === 'premium' ? (
      <ConfirmarPlano onCancel={() => setViewConfirmarPlano(false)} onConfirm={handleUpgrade} />
    ) : (
      <ConfirmarPlanoStandard onCancel={() => setViewConfirmarPlano(false)} onConfirm={handleUpgrade} />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Assinatura</Text>
      <BotaoVoltar onClick={onCancel} />

      <Text style={styles.subtitle}>Altere seu plano</Text>

      <Standard
        onUpgrade={() => {
          setSelectedPlan('standard');
          setViewConfirmarPlano(true);
        }}
        isCurrent={currentPlan === 'standard'}
      />
      <Premium
        onUpgrade={() => {
          setSelectedPlan('premium');
          setViewConfirmarPlano(true);
        }}
        isCurrent={currentPlan === 'premium'}
      />
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
});

export default Planos;