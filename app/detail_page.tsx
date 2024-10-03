import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useRouter } from 'expo-router'; // Import useRouter

export default function DetailsScreen() {
  const router = useRouter(); // Get router instance
  // Access the passed item data

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My App</Text>
      <Text style={styles.content}>
        This is a simple page demonstrating how to style a heading and other components in React Native.
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f5', // Light background color
    padding: 20,
  },
  heading: {
    fontSize: 24,           // Font size for heading
    fontWeight: 'bold',     // Bold text
    color: '#333',          // Dark text color
    marginBottom: 20,       // Space below heading
  },
  content: {
    fontSize: 16,           // Font size for content
    color: '#666',          // Lighter text color
    textAlign: 'center',    // Center the text
  },
});

