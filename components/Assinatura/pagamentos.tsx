import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BotaoVoltar } from '../Conta/botaoVoltar';

interface PaymentHistoryProps {
  data: Array<{
    date: string;
    plan: string;
    paymentMethod: string;
  }>;
  onCancel: () => void;
}

const PaymentHistory = ({ data, onCancel }: PaymentHistoryProps) => {
  const [year, setYear] = useState('2024');

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Assinatura</Text>
      <BotaoVoltar onClick={onCancel} />

      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Histórico de Pagamento</Text>
        <Picker
          selectedValue={year}
          onValueChange={handleYearChange}
          style={styles.picker}
        >
          <Picker.Item label="Ano 2024" value="2024" />
          <Picker.Item label="Ano 2023" value="2023" />
          <Picker.Item label="Ano 2022" value="2022" />
        </Picker>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Data</Text>
          <Text style={styles.tableHeaderText}>Plano</Text>
          <Text style={styles.tableHeaderText}>Método de pagamento</Text>
        </View>

        {data
          .filter((item) => item.date.includes(year))
          .map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text style={styles.tableCell}>{item.plan}</Text>
              <Text style={styles.tableCell}>{item.paymentMethod}</Text>
            </View>
          ))}
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  picker: {
    width: 120,
    height: 40,
    color: 'white',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  tableContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingVertical: 8,
  },
  tableCell: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    flex: 1,
  },
});

export default PaymentHistory;