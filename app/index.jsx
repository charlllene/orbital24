import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import { AppRegistry } from 'react-native';
import Navigation from '../components/navigation/Navigation'; 

// Register the Navigation component as the root component of your app
AppRegistry.registerComponent('HealthMate', () => Navigation);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
