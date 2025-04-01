import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import Buttons from '../Buttons/buttons';

interface StandardProps {
  onUpgrade: () => void;
  isCurrent: boolean;
}

interface StandardConfirmProps {
  onNext: () => void;
  onCancel: () => void;
}

export function Standard({ onUpgrade, isCurrent }: StandardProps) {
  return (
    <View style={styles.standardContainer}>
      <View style={styles.standardContent}>
        <Text style={styles.standardTitle}>Plano Standard</Text>
        <Text style={styles.standardDescription}>
          Neste plano você tem os seguintes benefícios:
        </Text>
      </View>

      <View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista seus vídeos em Full HD (1080)
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>Sem anúncios</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em até 2 aparelhos simultaneamente
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em celulares, tablets e computadores
          </Text>
        </View>

        <Text style={styles.standardPrice}>R$ 39,00/mês</Text>

        <TouchableOpacity
          onPress={isCurrent ? undefined : onUpgrade}
          disabled={isCurrent}
          style={[
            styles.upgradeButton,
            isCurrent ? styles.currentPlanButton : styles.upgradePlanButton,
          ]}
        >
          <Text
            style={[
              styles.upgradeButtonText,
              isCurrent ? styles.currentPlanText : styles.upgradePlanText,
            ]}
          >
            {isCurrent ? 'Plano atual' : 'Upgrade de plano'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function StandardConfirm({ onNext, onCancel }: StandardConfirmProps) {
  return (
    <View style={styles.standardContainer}>
      <View style={styles.standardContent}>
        <Text style={styles.standardTitle}>Plano Standard</Text>
        <Text style={styles.standardDescription}>
          Neste plano você tem os seguintes benefícios:
        </Text>
      </View>

      <View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista seus vídeos em Full HD (1080)
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>Sem anúncios</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em até 2 aparelhos simultaneamente
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em celulares, tablets e computadores
          </Text>
        </View>

        <Text style={styles.standardPrice}>R$ 39,00/mês</Text>

        <Buttons onCancel={onCancel} onNext={onNext}>
          Realizar troca de plano
        </Buttons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  standardContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  standardContent: {
    marginBottom: 16,
  },
  standardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  standardDescription: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginTop: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginLeft: 8,
  },
  standardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 16,
  },
  upgradeButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  currentPlanButton: {
    backgroundColor: 'black',
  },
  upgradePlanButton: {
    backgroundColor: 'white',
  },
  upgradeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentPlanText: {
    color: 'white',
    fontWeight: '300',
  },
  upgradePlanText: {
    color: 'black',
  },
});

export default Standard;