// PurpleScreen.tsx
import React from 'react';
import { View, StyleSheet, Button } from 'react-native'; // Import Button from 'react-native'
import CustomColors from '../components/color'; // Import your colors// Import your colors, ensure the correct path

const PurpleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()} // Ensure navigation is passed correctly
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes sure the view takes up the whole screen
    backgroundColor: CustomColors.purpleColor, // Use purple color from CustomColors
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',    // Center content horizontally
  },
});

export default PurpleScreen;
