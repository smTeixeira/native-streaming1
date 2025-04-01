import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import Buttons from '../Buttons/buttons';

interface PremiumProps {
  onUpgrade: () => void;
  isCurrent: boolean;
}

interface PremiumConfirmProps {
  onNext: () => void;
  onCancel: () => void;
}

export function Premium({ onUpgrade, isCurrent }: PremiumProps) {
  return (
    <View style={styles.premiumContainer}>
      <View style={styles.premiumContent}>
        <Text style={styles.premiumTitle}>Plano Premium</Text>
        <Text style={styles.premiumDescription}>
          Neste plano você tem os seguintes benefícios:
        </Text>
      </View>

      <View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista seus vídeos em Ultra HD (4k), HDR e Áudio espacial
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>Sem anúncios</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em até 6 aparelhos simultaneamente
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em celulares, tablets e computadores
          </Text>
        </View>

        <Text style={styles.premiumPrice}>R$ 55,90/mês</Text>

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

export function PremiumConfirm({ onNext, onCancel }: PremiumConfirmProps) {
  return (
    <View style={styles.premiumContainer}>
      <View style={styles.premiumContent}>
        <Text style={styles.premiumTitle}>Plano Premium</Text>
        <Text style={styles.premiumDescription}>
          Neste plano você tem os seguintes benefícios:
        </Text>
      </View>

      <View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista seus vídeos em Ultra HD (4k), HDR e Áudio espacial
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>Sem anúncios</Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em até 6 aparelhos simultaneamente
          </Text>
        </View>
        <View style={styles.benefitItem}>
          <MaterialIcons name="circle" size={12} color="white" />
          <Text style={styles.benefitText}>
            Assista em celulares, tablets e computadores
          </Text>
        </View>

        <Text style={styles.premiumPrice}>R$ 55,90/mês</Text>

        <Buttons onCancel={onCancel} onNext={onNext}>
          Realizar troca de plano
        </Buttons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  premiumContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  premiumContent: {
    marginBottom: 16,
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  premiumDescription: {
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
  premiumPrice: {
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

export default Premium;