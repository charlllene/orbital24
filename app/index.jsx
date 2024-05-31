import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/screen/LoginScreen';
import HomeScreen from '../app/screen/HomeScreen';
import { AppRegistry } from 'react-native';
import Navigation from '../components/Navigation'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


AppRegistry.registerComponent('HealthMate', () => App);

export default App;
