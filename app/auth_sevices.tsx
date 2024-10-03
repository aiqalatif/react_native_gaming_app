// // AuthService.js
// import firebase from './firebase'; // Import firebase correctly

// export const signUp = async (email, password) => {
//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//     console.log('User signed up!');
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const login = async (email, password) => {
//   try {
//     await firebase.auth().signInWithEmailAndPassword(email, password);
//     console.log('User logged in!');
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const logout = async () => {
//   try {
//     await firebase.auth().signOut();
//     console.log('User logged out!');
//   } catch (error) {
//     console.error(error.message);
//   }
// };
