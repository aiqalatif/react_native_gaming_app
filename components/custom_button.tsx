import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 128, 0, 0.8)',  
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,  
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom:10,
  },
  buttonText: {
    color: '#fff',  // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
