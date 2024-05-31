import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/screen/LoginScreen';
import HomeScreen from '../app/screen/HomeScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};

export default Navigation;
