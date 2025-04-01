import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddCode from '../ForgotPassaword/addCode'; 
import Buttons from '../Buttons/buttons';
import { BotaoVoltar } from '../Conta/botaoVoltar';
import { Seguranca } from '../Conta/seguranca';

interface ConfirmCodeProps {
  onCancel: () => void;
}

export const ConfirmCode = ({ onCancel }: ConfirmCodeProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [menu, setMenu] = useState(false);

  const handleCodeComplete = (code: string) => {
    setCode(code);
    if (code === '123456') {
      setCodeError('');
    } else {
      setCodeError('Código inválido. Tente novamente.');
    }
  };

  const handleConfirm = () => {
    if (code === '123456') {
      setIsSuccess(true);
    } else {
      setCodeError('Código inválido. Tente novamente.');
    }
  };

  if (menu) {
    return <Seguranca />;
  }

  return (
    <View style={styles.container}>
      {!isSuccess ? (
        <>
          <BotaoVoltar onClick={onCancel} />
          <View style={styles.content}>
            <Text style={styles.title}>Confirme seu número de celular</Text>
            <Text style={styles.description}>
              Última etapa! Enviamos um código para {'\n'}
              (11) 91234-5678. {'\n'}
              Informe-o abaixo para confirmar seu número de celular.
            </Text>
            <View style={styles.codeContainer}>
              <AddCode length={6} onComplete={handleCodeComplete} />
              {codeError && (
                <View style={styles.errorContainer}>
                  <MaterialIcons name="cancel" size={16} color="red" />
                  <Text style={styles.errorText}>{codeError}</Text>
                </View>
              )}
            </View>
            <Buttons onCancel={onCancel} onNext={handleConfirm}>
              Confirmar
            </Buttons>
          </View>
          <TouchableOpacity onPress={onCancel} style={styles.resendCodeContainer}>
            <Text style={styles.resendCodeText}>Enviar código novamente</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.successContainer}>
            <Text style={styles.successTitle}>Número confirmado com sucesso!</Text>
            <Text style={styles.successDescription}>
              Seu novo número foi cadastrado com sucesso.
            </Text>
          </View>
          <TouchableOpacity onPress={() => setMenu(true)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar para a segurança</Text>
          </TouchableOpacity>
        </>
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
  content: {
    marginBottom: 20,
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
  codeContainer: {
    marginBottom: 40,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 8,
  },
  resendCodeContainer: {
    marginTop: 28,
  },
  resendCodeText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  successContainer: {
    marginBottom: 40,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  successDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ConfirmCode;