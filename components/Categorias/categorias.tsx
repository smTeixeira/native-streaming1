import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Dimensions, 
  ScrollView,
  Modal,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DropdownGenerosProps {
  generos: string[];
  selectedGenero: string;
  onSelectGenero: (genero: string) => void;
}

const DropdownGeneros: React.FC<DropdownGenerosProps> = ({
  generos,
  selectedGenero,
  onSelectGenero,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = Dimensions.get('window').width < 768;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGeneroSelect = (genero: string) => {
    onSelectGenero(genero);
    setIsDropdownOpen(false);
  };

  const renderDropdownContent = () => (
    <View style={[
      styles.dropdownContainer,
      isMobile ? styles.mobileDropdown : styles.desktopDropdown
    ]}>
      {isMobile && (
        <TouchableOpacity 
          onPress={toggleDropdown}
          style={styles.closeButtonMobile}
        >
          <Ionicons name="close-circle" size={32} color="white" />
        </TouchableOpacity>
      )}
      
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {generos.map((genero) => (
          <TouchableOpacity
            key={genero}
            onPress={() => handleGeneroSelect(genero)}
            style={[
              styles.dropdownItem,
              selectedGenero === genero && styles.selectedDropdownItem,
              isMobile && styles.mobileItem
            ]}
          >
            <Text style={[
              styles.dropdownItemText,
              selectedGenero === genero && styles.selectedText
            ]}>
              {genero}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={styles.dropdownButton}
      >
        <Text style={styles.dropdownButtonText}>Categorias</Text>
        <Ionicons name="chevron-down" size={20} color="white" />
      </TouchableOpacity>

      {isMobile ? (
        <Modal
          visible={isDropdownOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={toggleDropdown}
        >
          <View style={styles.modalBackground}>
            {renderDropdownContent()}
          </View>
        </Modal>
      ) : isDropdownOpen ? (
        renderDropdownContent()
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 50,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 16,
  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
  dropdownContainer: {
    backgroundColor: '#1c1b1b',
    borderRadius: 8,
    padding: 12,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    width: '100%',
    maxHeight: '100%', 
  },
  mobileDropdown: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopDropdown: {
    position: 'absolute',
    top: 40,
    left: 0,
    width: 200,
    maxHeight: 300,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonMobile: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  scrollContainer: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
  },
  mobileItem: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  selectedDropdownItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dropdownItemText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedText: {
    color: 'yellow',
  },
});

export default DropdownGeneros;