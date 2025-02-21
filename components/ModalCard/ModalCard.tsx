import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

interface WordModalProps {
  content: string;
}

const WordModal: React.FC<WordModalProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.modalTrigger}>{content}</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Acessibilidade!</Text>
            <Text style={styles.modalText}>"{content}"</Text>

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>&times;</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalTrigger: {
    color: "#fbbf24",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalContent: {
    width: "75%", // Equivalente ao w-3/4
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 24,
    position: "relative",
  },
  modalTitle: {
    fontSize: 24,
    color: "#000",
    marginBottom: 16,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 16,
    color: "#000",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
});

export default WordModal;