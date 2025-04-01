import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { BotaoVoltar } from '../Conta/botaoVoltar';
import Perfil from './perfil';
import ProfileSettings from './gerenciador';

interface ProfileItemProps {
  onCancel: () => void;
}

const profiles = [
  { name: 'Daniela', imageSrc: require('../../assets/avatar1.jpg') },
  { name: 'Victória', imageSrc: require('../../assets/avatar2.png') },
  { name: 'Camilo', imageSrc: require('../../assets/avatar3.png') },
];

const Perfis = ({ onCancel }: ProfileItemProps) => {
  const [selectedProfile, setSelectedProfile] = useState<{
    name: string;
    imageSrc: any;
  } | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    setSelectedProfile(null);
  };

  const handleProfileClick = (profile: { name: string; imageSrc: any }) => {
    setSelectedProfile(profile);
  };

  const handleBack = () => {
    setSelectedProfile(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!selectedProfile ? (
        <>
          <BotaoVoltar onClick={onCancel} />
          {showSuccessMessage && (
            <View style={styles.successMessage}>
              <Text style={styles.successText}>Ajuste salvo com sucesso!</Text>
            </View>
          )}
          <Text style={styles.title}>Selecione o perfil para edição:</Text>
          <View style={styles.profilesContainer}>
            {profiles.map((profile) => (
              <Perfil
                key={profile.name}
                name={profile.name}
                imageSrc={profile.imageSrc}
                onClick={() => handleProfileClick(profile)}
                onCancel={onCancel}
              />
            ))}
          </View>
        </>
      ) : (
        <View style={styles.profileDetailsContainer}>
          <BotaoVoltar onClick={handleBack} />
          <View style={styles.profileHeader}>
            <Image source={selectedProfile.imageSrc} style={styles.profileImage} />
            <Text style={styles.profileName}>{selectedProfile.name}</Text>
          </View>
          <Text style={styles.settingsTitle}>
            Selecione a classificação etária do perfil de{' '}
            <Text style={styles.profileName}>{selectedProfile.name}</Text>
          </Text>
          <ProfileSettings profileName={selectedProfile.name} onSave={handleSave} />
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
  successMessage: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  successText: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  profilesContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  profileDetailsContainer: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
});

export default Perfis;