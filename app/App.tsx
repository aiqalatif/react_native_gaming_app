import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index'; // Import your Index screen
import DetailsScreen from './detail_page';
import PurpleScreen from './get_started_screen'; // Import Details screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PurpleScreen">
        <Stack.Screen name="PurpleScreen" component={PurpleScreen} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
