import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para substituir localStorage

interface ToggleProps {
  onClose: () => void;
  onSelect: (option: string) => void;
  selected: string | null;
}

export const Gerenciador = ({ onClose, onSelect, selected }: ToggleProps) => {
  const options = [
    'Classificação livre',
    'Classificação até 10 anos',
    'Classificação até 12 anos',
    'Classificação até 14 anos',
    'Classificação até 16 anos',
    'Classificação até 18 anos',
  ];

  return (
    <Modal transparent={true} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTitle}>Perfil infantil</Text>
          <ScrollView>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => onSelect(option)}
                style={[
                  styles.optionButton,
                  selected === option && styles.selectedOption,
                ]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

interface ProfileSettingsProps {
  profileName: string;
  onSave: () => void;
}

const ProfileSettings = ({ profileName, onSave }: ProfileSettingsProps) => {
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [showGerenciador, setShowGerenciador] = useState(false);
  const [restrictedTitles, setRestrictedTitles] = useState<string[]>([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const loadSettings = async () => {
      const savedRating = await AsyncStorage.getItem(`${profileName}-rating`);
      const savedTitles = await AsyncStorage.getItem(`${profileName}-titles`);
      if (savedRating) setSelectedRating(savedRating);
      if (savedTitles) setRestrictedTitles(JSON.parse(savedTitles));
    };
    loadSettings();
  }, [profileName]);

  const handleSelect = (option: string) => {
    setSelectedRating(option);
    setShowGerenciador(false);
  };

  const handleAddTitle = () => {
    if (newTitle.trim() !== '' && !restrictedTitles.includes(newTitle)) {
      setRestrictedTitles([...restrictedTitles, newTitle]);
      setNewTitle('');
    }
  };

  const handleRemoveTitle = (title: string) => {
    setRestrictedTitles(restrictedTitles.filter((t) => t !== title));
  };

  const handleSave = async () => {
    await AsyncStorage.setItem(`${profileName}-rating`, selectedRating || '');
    await AsyncStorage.setItem(`${profileName}-titles`, JSON.stringify(restrictedTitles));
    onSave();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.ratingInput}
        onPress={() => setShowGerenciador(!showGerenciador)}
      >
        <Text style={styles.ratingText}>{selectedRating || 'Selecione...'}</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="white" />
      </TouchableOpacity>

      {showGerenciador && (
        <Gerenciador
          onClose={() => setShowGerenciador(false)}
          onSelect={handleSelect}
          selected={selectedRating}
        />
      )}

      <Text style={styles.note}>
        *Os títulos de todas as classificações serão mostrados para esse perfil.
      </Text>

      <Text style={styles.sectionTitle}>Títulos restringidos</Text>
      <Text style={styles.sectionDescription}>
        Não mostrar títulos específicos para esse perfil
      </Text>

      <TextInput
        style={styles.titleInput}
        placeholder="Informe o nome da série ou filme"
        value={newTitle}
        onChangeText={setNewTitle}
        onSubmitEditing={handleAddTitle}
        placeholderTextColor="#999"
      />

      {restrictedTitles.map((title) => (
        <View key={title} style={styles.titleItem}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity onPress={() => handleRemoveTitle(title)}>
            <MaterialIcons name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar ajustes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1C1B1B',
  },
  ratingInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
  },
  note: {
    fontSize: 14,
    color: 'white',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 16,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    color: 'white',
    marginBottom: 16,
  },
  titleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  titleText: {
    fontSize: 14,
    color: 'white',
  },
  saveButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  modalHeader: {
    alignItems: 'flex-end',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#FFD700',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileSettings;