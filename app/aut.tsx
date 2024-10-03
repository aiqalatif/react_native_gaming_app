// // App.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { signUp, login, logout } from './auth_sevices';

// const Auth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSignUp = async () => {
//     await signUp(email, password);
//     setIsLoggedIn(true);
//   };

//   const handleLogin = async () => {
//     await login(email, password);
//     setIsLoggedIn(true);
//   };

//   const handleLogout = async () => {
//     await logout();
//     setIsLoggedIn(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {!isLoggedIn ? (
//         <>
//           <Button title="Sign Up" onPress={handleSignUp} />
//           <Button title="Login" onPress={handleLogin} />
//         </>
//       ) : (
//         <Button title="Logout" onPress={handleLogout} />
//       )}
//       {isLoggedIn && <Text style={styles.message}>Welcome!</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   message: {
//     marginTop: 20,
//     fontSize: 18,
//   },
// });

// export default Auth;
