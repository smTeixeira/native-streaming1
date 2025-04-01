import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'; 
import { BotaoVoltar } from '../Conta/botaoVoltar'; // Para botão de voltar
import Buttons from '../Buttons/buttons';
import { ConfirmCode } from '../Celular/confirmCodeCel';

interface AltCelularProps {
  onCancel: () => void;
}

export const AltCelular = ({ onCancel }: AltCelularProps) => {
  const [altCelular, setAltCelular] = useState(false);
  const [celular, setCelular] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (celular.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
      setAltCelular(true);
      setError('');
    } else {
      setError('Por favor, insira um número de celular válido.');
    }
  };

  const handleNext = () => {
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      {!altCelular ? (
        <>
          <BotaoVoltar onClick={onCancel} />
          <Text style={styles.title}>Altere o número de celular</Text>
          <Text style={styles.description}>
            A HANDSPlay usa seu número de celular para enviar mensagens por SMS, como as que auxiliam no acesso e
            recuperação da conta. A seguir, insira seu novo número, e aguarde o código de verificação.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Celular</Text>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={celular}
              onChangeText={setCelular}
              placeholder="(11) 99999-9999"
              placeholderTextColor="#999"
              style={[styles.input, error ? styles.inputError : null]}
              keyboardType="phone-pad"
            />
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <MaterialIcons name="cancel" size={16} color="red" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Buttons onCancel={onCancel} onNext={handleNext}>
              Próximo
            </Buttons>
          </View>
        </>
      ) : (
        <ConfirmCode onCancel={() => setAltCelular(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1B1B',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 24,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    padding: 0,
  },
  inputError: {
    borderColor: 'red',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 8,
  },
  buttonContainer: {
    paddingHorizontal: 8,
  },
});

export default AltCelular;