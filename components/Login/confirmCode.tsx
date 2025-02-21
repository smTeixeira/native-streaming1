// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { MaterialIcons } from "@expo/vector-icons"; // Substituindo ícones do react-icons
// import AddCode from "../Login/addCode"; // Componente de entrada de código
// import Buttons from "../Buttons/buttons"; // Componente de botões personalizado

// interface ConfirmCodeProps {
//   resetOption: "email" | "text";
//   contactInfo: string;
// }

// const ConfirmCode = ({ resetOption, contactInfo }: ConfirmCodeProps) => {
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [code, setCode] = useState("");
//   const [codeError, setCodeError] = useState("");
//   const [showResetPassword, setShowResetPassword] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

//   const navigation = useNavigation();

//   const handleCodeComplete = (code: string) => {
//     setCode(code);
//     if (code === "123456") {
//       setCodeError("");
//       setShowResetPassword(true);
//     } else {
//       setCodeError("Código inválido. Tente novamente.");
//     }
//   };

//   const handleConfirm = () => {
//     if (code === "123456") {
//       setIsSuccess(true);
//     } else {
//       setCodeError("Código inválido. Tente novamente.");
//     }
//   };

//   const handleBack = () => {
//     navigation.navigate("Login"); // Navega para a tela de login
//   };

//   const handleResetPassword = () => {
//     if (!newPassword || !confirmPassword) {
//       setPasswordError("Os campos de senha não podem estar vazios.");
//     } else if (newPassword !== confirmPassword) {
//       setPasswordError("As senhas não coincidem. Tente novamente.");
//     } else {
//       setPasswordError("");
//       setPasswordResetSuccess(true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         {passwordResetSuccess ? (
//           <View style={styles.successContainer}>
//             <Text style={styles.successTitle}>Nova senha criada com sucesso!</Text>
//             <Text style={styles.successText}>
//               Sua senha foi atualizada com sucesso, agora sempre que for entrar em um novo dispositivo, use sua nova senha.
//             </Text>
//             <Buttons
//               onCancel={() => navigation.navigate("Login")}
//               onNext={handleBack}
//             >
//               Ir para página de login
//             </Buttons>
//           </View>
//         ) : showResetPassword ? (
//           <View>
//             <Text style={styles.title}>Cadastre a nova senha</Text>
//             <Text style={styles.subtitle}>
//               Proteja sua conta com uma senha exclusiva de pelo menos seis caracteres.
//             </Text>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Nova senha</Text>
//               <View style={styles.passwordInput}>
//                 <TextInput
//                   style={styles.input}
//                   value={newPassword}
//                   onChangeText={setNewPassword}
//                   placeholder="********"
//                   placeholderTextColor="#999"
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.icon}
//                   onPress={() => setShowPassword(!showPassword)}
//                 >
//                   <MaterialIcons
//                     name={showPassword ? "visibility-off" : "visibility"}
//                     size={24}
//                     color="#FFF"
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Confirme a nova senha</Text>
//               <View style={styles.passwordInput}>
//                 <TextInput
//                   style={styles.input}
//                   value={confirmPassword}
//                   onChangeText={setConfirmPassword}
//                   placeholder="********"
//                   placeholderTextColor="#999"
//                   secureTextEntry={!showConfirmPassword}
//                 />
//                 <TouchableOpacity
//                   style={styles.icon}
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <MaterialIcons
//                     name={showConfirmPassword ? "visibility-off" : "visibility"}
//                     size={24}
//                     color="#FFF"
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

//             <Buttons
//               onCancel={handleBack}
//               onNext={handleResetPassword}
//             >
//               Cadastrar nova senha
//             </Buttons>
//           </View>
//         ) : (
//           <View>
//             <Text style={styles.title}>
//               Confirme seu {resetOption === "email" ? "email" : "telefone"}
//             </Text>
//             <Text style={styles.subtitle}>
//               Última etapa! Enviamos um código para{"\n"}
//               <Text style={styles.contactInfo}>{contactInfo}</Text>.{"\n"}
//               Informe-o abaixo para confirmar seu {resetOption === "email" ? "email" : "telefone"}.
//             </Text>

//             <AddCode length={6} onComplete={handleCodeComplete} />

//             {codeError && (
//               <View style={styles.errorContainer}>
//                 <MaterialIcons name="cancel" size={20} color="red" />
//                 <Text style={styles.errorText}>{codeError}</Text>
//               </View>
//             )}

//             <Buttons
//               onCancel={handleBack}
//               onNext={handleConfirm}
//             >
//               Confirmar
//             </Buttons>
//           </View>
//         )}

//         {!showResetPassword && !passwordResetSuccess && (
//           <TouchableOpacity onPress={() => console.log("Enviar código novamente")}>
//             <Text style={styles.resendCode}>Enviar código novamente</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     padding: 20,
//   },
//   content: {
//     width: "100%",
//     maxWidth: 400,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     borderRadius: 8,
//     padding: 20,
//   },
//   successContainer: {
//     alignItems: "center",
//   },
//   successTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#FFF",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   successText: {
//     fontSize: 14,
//     color: "#FFF",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#FFF",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#FFF",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     color: "#FFF",
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   passwordInput: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#FFF",
//     borderRadius: 8,
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     color: "#FFF",
//     fontSize: 16,
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   errorContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFF",
//     borderRadius: 8,
//     padding: 10,
//     marginTop: 10,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 14,
//     marginLeft: 5,
//   },
//   contactInfo: {
//     fontWeight: "bold",
//   },
//   resendCode: {
//     color: "#FFF",
//     fontSize: 14,
//     textDecorationLine: "underline",
//     marginTop: 20,
//     textAlign: "center",
//   },
// });

// export default ConfirmCode;